"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishPost";
import { Prisma } from "@prisma/client";

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();
  const user = session?.user?.name as any;
  const userId = user?.id;
  console.log(`USER: ${userId}, USER: ${user}`);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [postID, setPostID] = useState<number | null>(null);

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
      let newPost: Prisma.PostUncheckedCreateInput = {
        title,
        content,
        authorId: userId,
      };

      const post = await createPost(newPost);
      setPostID(post.id);
      setSubmitted(true);
      handleSubmitedMsg();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitedMsg = () => {
    if (submitted) {
      return (
        <main className="flex justify-center h-screen mt-20">
          <h2 className="text-center text-violet-500 text-xl">
            Your post has been submitted!
          </h2>
        </main>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
