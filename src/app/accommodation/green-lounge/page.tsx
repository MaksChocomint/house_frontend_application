import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Accommodation/GreenLounge/Main/Main";
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
            imageUrl="/accommodation/green-lounge/greenlounge-background.jpg"
            infoTitle="Гостевые дома"
            infoDescription="Место, где вы сможете забыть о городе и воссоединиться с природой"
            hasFilmtape={false}
            hasButton={false}
          />
        </div>
      </div>
      <Main />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default GreenLounge;
