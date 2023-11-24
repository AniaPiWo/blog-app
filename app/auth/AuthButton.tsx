"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

type Props = {};

export const AuthButton = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="text-white bg-gray-500 p-4" disabled>
        Loading...
      </button>
    );
  }

  if (session) {
    return (
      <button
        className="text-white bg-black p-4 flex items-center"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        <Image
          className="mr-2"
          src="/github-mark-white.png"
          width={20}
          height={20}
          alt="github logo"
        />
        Sign Out
      </button>
    );
  }

  return (
    <button
      className="text-white bg-black p-4 flex items-center"
      onClick={() => signIn()}
    >
      <Image
        className="mr-2"
        src="/github-mark-white.png"
        width={20}
        height={20}
        alt="github logo"
      />
      Sign In
    </button>
  );
};
