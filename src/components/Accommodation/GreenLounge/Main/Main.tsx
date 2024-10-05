import React from "react";
import Info from "./Info";
import Activities from "./Activities";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <Activities />
    </div>
  );
};

export default Main;
