import Background from "@/components/Background";
import Socials from "@/components/Socials";
import Link from "next/link";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contacts = () => {
  return (
    <Background imageUrl="/contact.jpg">
      <div className="w-full h-full py-64 px-10 bg-black bg-opacity-50 text-white flex flex-col gap-10 items-start">
        <h1 className="text-2xl tracking-wide font-semibold">Наши контакты</h1>
        <div className="text-xl font-light">
          <div>+7 (925) 143-79-52</div>
          <div>flatpoint@club-moscow.ru</div>
        </div>
        <div className="text-base font-light">
          Московская область, городской округ Истра, поселок Грин Лаундж
        </div>
        <div className="flex items-center gap-1">
          <Socials />
          <Link
            href="tel:+79251437952"
            className="hover:text-yellow-500 transition-colors"
          >
            <BiSolidPhoneCall className="text-[42px] tablet:text-[32px]" />
          </Link>
        </div>
      </div>
    </Background>
  );
};

export default Contacts;
