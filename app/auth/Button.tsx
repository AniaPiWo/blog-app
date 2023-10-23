"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export const AuthButton = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (session) {
    return (
      <div className="flex items-stretch">
        <button
          className="text-white bg-black p-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={() => signIn()}
      className="text-white bg-black p-4 cursor-pointer"
    >
      Sign In
    </div>
  );
};