"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const MyAccBtn = (props: Props) => {
  return (
    <Link
      href="/my-account"
      className="px-2 py-2 flex items-center justify-center"
    >
      <Image width="40" height="40" alt="logo" src="/acc.png" />
    </Link>
  );
};

export default MyAccBtn;
