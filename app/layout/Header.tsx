"use client";
import React from "react";
import Link from "next/link";
import { AuthButton } from "../auth/Button";
import { SessionProvider } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div className="border-b border-black flex justify-between">
        <Link href="/" className="px-2 py-4 text-4xl">
          BlogApp
        </Link>
        <AuthButton />
      </div>
    </SessionProvider>
  );
};

export default Header;
