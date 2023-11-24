import React from "react";
import ConfettiEffect from "../components/Confetti";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1>Moja strona z efektem Confetti!</h1>
      <ConfettiEffect />
    </div>
  );
};

export default page;
