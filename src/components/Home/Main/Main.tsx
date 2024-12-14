import React from "react";
import Info from "./Info";
import Gallery from "./Gallery";
import Pallete from "./Pallete";
// import Gallery from "./Gallery";
// import Link from "next/link";
// import Container from "@/components/Container";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col">
      <Info />
      <Gallery />
      <Pallete />
    </div>
  );
};

export default Main;
