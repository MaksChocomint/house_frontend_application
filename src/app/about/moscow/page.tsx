import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import React from "react";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/About/Moscow/Main/Main";

const Moscow = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Header />
          <Intro
            imageUrl="/about/moscow/moscow-background.webp"
            infoTitle="Квартиры и студии в Москве"
            infoDescription="Место, где вы сможете забыть о городе и воссоединиться с природой"
            darker={false}
          />
        </div>
      </div>
      <Main />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Moscow;
