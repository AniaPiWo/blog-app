"use client";
import React from "react";

type Props = {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = (props: Props) => {
  const buttonClasses = `cursor-pointer text-white w-fit bg-indigo-500 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] ${props.className}`;

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      {props.text}
    </button>
  );
};

export default Button;
