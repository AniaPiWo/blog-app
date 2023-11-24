import React from "react";
import type { Post } from "@prisma/client";
import Link from "next/link";

type Props = { post: Post; className?: string };

const PostCard = ({ post, className }: Props) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      passHref
      className={`${className} p-4 rounded border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] flex flex-col`}
    >
      <h3 className="text-3xl text-2xl mb-3">{post.title}</h3>

      <p className="flex-grow text-xs mb-4 line-clamp-5">{post.content}</p>
      <p className="self-end text-indigo-600">Read More</p>
    </Link>
  );
};

export default PostCard;
