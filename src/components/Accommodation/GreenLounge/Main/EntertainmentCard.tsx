import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  image: string;
  title: string;
  text: string;
  link: string;
  onNext: () => void;
};

const EntertainmentCard = ({ image, title, text, link, onNext }: Props) => {
  return (
    <div className="w-full rounded-2xl flex flex-col largeTablet:flex-row largeTablet:gap-8 smallLaptop:gap-12 h-[850px] largeTablet:h-[550px] relative bg-human-detail items-center">
      <Image
        src={image}
        alt="gallery_element"
        height={500}
        width={410}
        className="rounded-2xl object-cover h-[400px] w-full largeTablet:w-[410px] largeTablet:h-full"
      />
      <div className="flex flex-col gap-6 desktop:gap-8 smallLaptop:mr-24 pt-4 pb-8 items-center h-full largeTablet:items-start largeTablet:py-12 px-4 largeTablet:px-0">
        <div
          className="text-2xl smallLaptop:text-3xl text-natural-style text-center largeTablet:text-start uppercase font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>

        <div
          className="text-sm laptop:text-base text-black text-justify"
          dangerouslySetInnerHTML={{
            __html: text.replace(/<ul>/g, '<ul class="custom-list">'),
          }}
        ></div>
        <div className="mt-auto">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg uppercase bg-home-coziness rounded-full text-white py-5 px-10 smallTablet:px-16"
          >
            Забронировать
          </Link>
        </div>
      </div>
      <div
        onClick={onNext}
        className="absolute right-4 text-center top-1/2 -translate-y-1/2 cursor-pointer smallLaptop:block hidden"
      >
        <IoIosArrowForward
          size={64}
          className="rounded-full border-2 border-natural-style text-natural-style p-4"
        />
      </div>
    </div>
  );
};

export default EntertainmentCard;
