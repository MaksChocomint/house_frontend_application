import Socials from "@/components/Socials";
import Link from "next/link";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import ContactsBackground from "./ContactsBackground";

const Contacts = () => {
  return (
    <ContactsBackground imageUrl="/contact.jpg">
      <div className="w-full h-full py-64 px-10 bg-black/50 text-white flex flex-col gap-10 items-start justify-center">
        <h1 className="text-2xl tracking-wide font-semibold">Наши контакты</h1>
        <div className="text-xl font-light">
          <div>+7 (495) 125-25-27</div>
          <div>info@flatpoint.ru</div>
        </div>
        <div className="flex items-center gap-1">
          <Socials />
          <Link
            href="tel:+74951252527"
            className="hover:text-yellow-500 transition-colors"
          >
            <BiSolidPhoneCall className="text-[42px] tablet:text-[32px]" />
          </Link>
        </div>
      </div>
    </ContactsBackground>
  );
};

export default Contacts;
