import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 mt-6">
      <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-2xl sm:text-4xl md:text-6xl ms:leading-normal">
          Tech News for Busy Peeps
        </h1>
        <button className="text-white w-fit bg-indigo-500 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
          Browse Articles
        </button>
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
