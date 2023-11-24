import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 mt-6">
      <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-2xl sm:text-4xl md:text-6xl ms:leading-normal">
          Tech News for Busy Peeps
        </h1>
        <Link href="/blog/all">
          <Button text="Browse Articles" />
        </Link>
      </div>
      <div className="col-span-5 place-self-center">
        <Image
          src="/coffee.png"
          width={150}
          height={300}
          alt="person holding cup"
        />
      </div>
    </section>
  );
};

export default HeroSection;
