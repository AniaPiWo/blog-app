"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishPost";

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();
  const user = session?.user?.name as any;
  const userId = user?.id;
  console.log(`USER: ${userId}, USER: ${user}`);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session && status === "loading")
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
    <div className="flex justify-center h-screen mt-20">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Title"
        />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Content"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-violet-500 text-white py-2 rounded-md hover:bg-violet-600 focus:outline-none focus:ring focus:bg-violet-600"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
