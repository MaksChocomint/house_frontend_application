import React from "react";
import Info from "./Info";
import Gallery from "./Gallery";
import Link from "next/link";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <Gallery />
      <div className="flex items-center gap-4 mt-16">
        <Link href="/accommodation/houses">
          <button className="text-sm py-4 w-60 border-2 border-black font-bold rounded-full mr-4">
            Гостевые дома
          </button>
        </Link>

        <Link href="/accommodation">
          <button className="text-sm py-4 w-60 border-2 border-black font-bold rounded-full">
            Доступные апартаменты
          </button>
        </Link>
        <Link href="/accommodation/apartments">
          <button className="text-sm py-4 w-60 border-2 border-black font-bold rounded-full ml-4">
            Квартиры
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
