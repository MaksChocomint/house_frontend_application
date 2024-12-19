import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  image: string;
  title: string;
  text: string;
};

const EntertainmentCard = ({ image, title, text }: Props) => {
  return (
    <div className="w-full rounded-2xl flex flex-col tablet:flex-row tablet:gap-16 h-screen overflow-y-auto tablet:h-[500px] relative bg-human-detail items-center">
      <Image
        src={image}
        alt="gallery_element"
        height={500}
        width={410}
        className="rounded-2xl object-cover w-full h-[500px] tablet:h-full"
      />
      <div className="flex flex-col gap-8 tablet:mr-24 pt-4 pb-8 items-center tablet:items-start tablet:py-12 px-4 tablet:px-0">
        <div
          className="text-3xl desktop:text-4xl text-natural-style uppercase font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div
          className="text-lg text-black"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className="tablet:mt-10">
          <a
            href="?tl-booking-open=true"
            className="text-lg smallLaptop:text-xl uppercase bg-home-coziness rounded-full text-white px-10 py-5 smallLaptop:px-16"
          >
            Забронировать
          </a>
        </div>
      </div>
      <div className="absolute right-8 text-center top-1/2 -translate-y-1/2 cursor-pointer tablet:block hidden">
        <IoIosArrowForward
          size={52}
          className="rounded-full border-2 border-black"
        />
      </div>
    </div>
  );
};

export default EntertainmentCard;
