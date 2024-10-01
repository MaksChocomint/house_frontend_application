import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import React from "react";

const GreenLounge = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Header />
          <Intro
            imageUrl="/greenlounge-background.jpg"
            infoTitle="Гостевые дома в КП Грин Лаундж"
            infoDescription="Место, где вы сможете забыть о городе и воссоединиться с природой"
            darker={false}
          />
        </div>
      </div>
    </div>
  );
};

export default GreenLounge;
