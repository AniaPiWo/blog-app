"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishPost";
import { UploadButton } from "@/app/utils/uploadthing";
import "@uploadthing/react/styles.css";
import Image from "next/image";

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();
  const user = session?.user?.name as any;
  const userId = user?.id;

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  if (!session && status !== "loading")
    return (
      <main className="flex justify-center h-screen mt-20">
        <h2 className="text-center text-violet-500 text-xl">
          You must be signed in to post.
        </h2>
      </main>
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = session?.user as any;
    const userId = user?.id;

    if (!userId) return;
    try {
      const post = await createPost({ title, content, authorId: userId });
      console.log(post);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted) {
    return (
      <main className="flex justify-center h-screen mt-20">
        <h2 className="text-center text-violet-500 text-xl">Post submitted!</h2>
      </main>
    );
  }

  return (
    <div className="py-2 container flex flex-col mt-12">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          className="text-5xl focus-visible:outline-none w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <textarea
          name="content"
          placeholder="Content"
          className="focus-visible:outline-none text-3xl h-96 w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="self-start">
          {thumbnail && (
            <Image
              width={80}
              height={80}
              src={thumbnail}
              alt="Thumbnail"
              className="w-20 h-20 object-cover rounded-full"
            />
          )}
          <label className="text-slate-600 mb-3">
            {thumbnail ? "Change Image" : "Add thumbnail image (optional)"}
          </label>
          <UploadButton
            className="items-start"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              if (res) {
                setThumbnail(res[0].url);
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>

        <button
          type="submit"
          className=" w-full text-white bg-indigo-400 px-4 py-2 sm:px-6 sm:py-4 mt-6 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
