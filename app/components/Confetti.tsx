"use client";
import Confetti from "react-dom-confetti";

const ConfettiEffect = () => {
  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div>
      <Confetti active={true} config={confettiConfig} />
    </div>
  );
};

export default ConfettiEffect;
