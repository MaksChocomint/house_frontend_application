import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import React from "react";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Feedback/Main";

const Feedback = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Header />
          <Intro
            imageUrl="/accommodation/moscow/moscow-background.webp"
            infoTitle="Отзывы"
            infoDescription="Flatpoint"
            darker={false}
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

export default Feedback;
