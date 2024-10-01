import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import React from "react";

const Moscow = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Header />
          <Intro
            imageUrl="/moscow-background.webp"
            infoTitle="Квартиры и студии в Москве"
            infoDescription="Место, где вы сможете забыть о городе и воссоединиться с природой"
            darker={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Moscow;
