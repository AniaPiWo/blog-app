import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {};

const WelcomeUser = (props: Props) => {
  const { data: session, status } = useSession();
  const user = session?.user?.name as any;
  const avatar = session?.user?.image as any;

  if (!session) return;

  return (
    <div className="flex justify-center items-center mx-10">
      <p className="text-center text-violet-500 text-l">Welcome, {user}!</p>
      <Image
        src={avatar}
        alt="user avatar"
        className="rounded-full h-10 w-10 mx-2 border-1 border-black"
        width={40}
        height={40}
      ></Image>
    </div>
  );
};

export default WelcomeUser;
