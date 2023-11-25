"use client";
import React, { FormEvent, useState } from "react";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const msgReset = () => {
      setTimeout(() => {
        setStatusMessage(null);
      }, 2500);
    };

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (data.get("email") === "" || data.get("message") === "") {
        setStatusMessage("Both fields must be filled in.");
        msgReset();
      } else if (!emailRegex.test(data.get("email") as string)) {
        setStatusMessage("Invalid email address!");
        msgReset();
      } else {
        setStatusMessage("Form submitted! 💜");
        console.log("subscribed");
        form.reset();
        msgReset();
      }
    } catch (error) {
      console.log(error);
      setStatusMessage("There was a problem submitting the form.");
    }
  }

  return (
    <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <input
          name="email"
          placeholder="email"
          className="border-2 border-gray-500 p-2 bg-gray-800 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <textarea
          name="message"
          placeholder="message"
          className="border-2 border-gray-500 p-2 bg-gray-800 max-h-32 rounded-md resize-none focus:outline-none focus:border-indigo-500"
        ></textarea>
      </div>
      <div className="flex flex-row  justify-between items-center gap-2 text-indigo-500">
        <p className="whitespace-normal">{statusMessage}</p>
        <Button text="Send" type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
