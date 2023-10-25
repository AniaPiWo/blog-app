"use client";
import React from "react";
import Link from "next/link";
import { AuthButton } from "../auth/AuthButton";
import { SessionProvider } from "next-auth/react";
import WelcomeUser from "./WelcomeUser";

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div className="border-b border-black flex justify-between">
        <Link href="/" className="px-2 py-4 text-4xl">
          BlogApp
        </Link>
        <div className="flex items-stretch">
          <WelcomeUser />
          <AuthButton />
        </div>
      </div>
    </SessionProvider>
  );
};

export default Header;
