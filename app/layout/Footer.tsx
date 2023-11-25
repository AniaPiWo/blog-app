import React from "react";
import githubIcon from "../../public/github-icon.svg";
import twitterIcon from "../../public/twitter-icon.svg";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer bg-gray-800 text-white py-12 px-4 ">
      <div className="flex container justify-around items-center">
        <div className="flex flex-row items-center">
          <div>
            <div className="text-2xl mb-3">Brut Blog</div>
            <div className="text-sm">© 2023 Seahorse</div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <ContactForm />
        </div>
        <div className="flex flex-col">
          <Link href="https://github.com" target="_blank" className="mr-3">
            <Image src={githubIcon} alt="github" width={32} height={32} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={32} height={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
