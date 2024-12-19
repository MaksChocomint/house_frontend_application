import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Accommodation/GreenLounge/Main/Main";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import React from "react";

const GreenLounge = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Header />
          <Intro
            imageUrl="/accommodation/green-lounge/background.jpg"
            infoTitle="Гостевые дома"
            infoDescription="Место, где вы сможете забыть о городе<br>и воссоединиться с природой в Подмосковье"
            hasFilmtape={false}
            hasButton={true}
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
