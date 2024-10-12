import React from "react";
import Info from "./Info";
import DownloadButton from "./DownloadButton";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center bg-slate-100 p-10">
      <DownloadButton />
      <Info />
    </div>
  );
};

export default Main;
