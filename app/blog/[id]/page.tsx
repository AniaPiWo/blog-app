import React from "react";
import { prisma } from "@/lib/prisma";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="container-sm mt-6">
      {post && (
        <>
          {post.imgURL && (
            <div
              className="w-full h-24 my-4 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${post.imgURL})` }}
            ></div>
          )}
          <h1 className="text-5xl mb-5">{post.title}</h1>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">By</p>
            <div
              className="w-8 h-8 ml-4 mr-2 rounded-full bg-contain"
              style={{ backgroundImage: `url(${post.author.image})` }}
            ></div>
            <p className="text-sm text-gray-500">{post.author.name}</p>
          </div>
          <p className="mt-4">{post.content}</p>
        </>
      )}
    </div>
  );
};

export default page;
