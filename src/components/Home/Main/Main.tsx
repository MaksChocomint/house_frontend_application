import React from "react";
import Info from "./Info";
import Gallery from "./Gallery";
import Link from "next/link";
import ContactSection from "@/components/Footer/ContactSection";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <Gallery />

      <div className="flex flex-col tablet:flex-row items-center gap-4 tablet:gap-8 mt-16">
        <Link href="/accommodation/houses">
          <button className="text-sm py-4 w-72 tablet:w-60 border-2 border-black font-bold rounded-full">
            Гостевые дома
          </button>
        </Link>

        <Link href="/accommodation">
          <button className="text-sm py-4 w-72 tablet:w-60 border-2 border-black font-bold rounded-full">
            Доступные апартаменты
          </button>
        </Link>
        <Link href="/accommodation/apartments">
          <button className="text-sm py-4 w-72 tablet:w-60 border-2 border-black font-bold rounded-full">
            Квартиры
          </button>
        </Link>
      </div>
      <ContactSection />
    </div>
  );
};

export default Main;
