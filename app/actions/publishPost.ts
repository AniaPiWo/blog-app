import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function createPost(postInfo: Prisma.PostUncheckedCreateInput) {
  const newPost = await prisma.post.create({
    data: { ...postInfo },
  });
  return newPost;
}
