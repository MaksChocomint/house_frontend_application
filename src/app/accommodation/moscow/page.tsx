import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import React from "react";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Accommodation/Moscow/Main/Main";

const Moscow = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Header />
          <Intro
            imageUrl="/accommodation/moscow/background.jpg"
            infoTitle="Апартаменты"
            infoDescription="Идеальное сочетание современного комфорта<br>и уюта в Москве"
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

export default Moscow;
