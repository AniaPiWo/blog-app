"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishPost";
import { UploadButton } from "@/app/utils/uploadthing";
import "@uploadthing/react/styles.css";
import Image from "next/image";
import Confetti from "react-dom-confetti";
import Button from "@/app/components/Button";

/* type Props = {
  blogCategories: Category[];
}; */

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();
  const user = session?.user?.name as any;

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [postID, setPostID] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 30,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#FF0000", "#00FF00", "#0000FF"],
  };

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
      const post = await createPost({
        title,
        content,
        authorId: userId,
        imgURL: thumbnail,
      });
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
        <Button className="w-full" text="Create Post" type="submit" />
      </form>
    </div>
  );
};

export default NewBlogForm;
