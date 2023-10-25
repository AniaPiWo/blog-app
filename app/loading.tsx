import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <main className="flex justify-center h-screen mt-20">
      <h2 className="text-center text-violet-500">
        Fetching that data for you...
      </h2>
    </main>
  );
};

export default Loading;
