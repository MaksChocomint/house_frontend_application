import React from "react";
import Info from "./Info";
import Gallery from "./Gallery";
// import Gallery from "./Gallery";
// import Link from "next/link";
// import Container from "@/components/Container";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col">
      <Info />
      <Gallery />
    </div>
  );
};

export default Main;
