import React from "react";
import Info from "./Info";
import Gallery from "./Gallery";
import Palette from "./Palette";
import Apartments from "./Apartments";
import Entertainment from "./Entertainment";
import Feedback from "./Feedback";
import Questions from "../../Questions";
import ContactSection from "@/components/ContactSection";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col">
      <Info />
      <Gallery />
      <Palette />
      <Apartments />
      <Entertainment />
      <Feedback />
      <Questions />
      <ContactSection />
    </div>
  );
};

export default Main;
