"use client";
import React from "react";
import Link from "next/link";
import { AuthButton } from "../auth/AuthButton";
import { SessionProvider } from "next-auth/react";
import WelcomeUser from "../components/WelcomeUser";
import Image from "next/image";
import MyAccBtn from "../components/MyAccBtn";

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <header className="header border-b border-black flex justify-between">
        <Link href="/" className="px-2 py-2 flex items-center justify-center">
          <Image width="70" height="70" alt="logo" src="/logo.png" />
          <p className="text-4xl px-2 font-bold">BrutBlog</p>
        </Link>
        <div className="flex items-stretch justify-center">
          <WelcomeUser />
          <MyAccBtn />
          <AuthButton />
        </div>
      </header>
    </SessionProvider>
  );
};

export default Header;
