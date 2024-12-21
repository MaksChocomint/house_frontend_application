"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useWindowSize } from "@/utils/useWindowSize";
import Link from "next/link";

interface ApartmentCardProps {
  title: string;
  propsList: string[];
  images: string[];
  link: string;
  isMirrored: boolean;
  paletteImage: string;
  booking: boolean;
}

const NewApartmentCard: React.FC<ApartmentCardProps> = ({
  title,
  propsList,
  images,
  link,
  isMirrored,
  paletteImage,
  booking,
}) => {
  const [imageList, setImageList] = useState(images);
  const { width } = useWindowSize();

  const handleImageClick = (clickedIndex: number) => {
    if (clickedIndex !== 0) {
      const updatedImages = [...imageList];
      [updatedImages[0], updatedImages[clickedIndex]] = [
        updatedImages[clickedIndex],
        updatedImages[0],
      ];
      setImageList(updatedImages);
    }
  };

  return (
    <div
      className={`flex flex-col smallLaptop:flex-row gap-6 smallLaptop:gap-16 desktop:gap-24 items-stretch ${
        isMirrored ? "smallLaptop:flex-row-reverse" : ""
      }`}
    >
      {/* Левая часть с текстом */}

      {/* Правая часть с изображениями */}
      <div className="flex flex-col gap-2 desktop:gap-4 w-full smallLaptop:w-[60%] relative">
        <div className="absolute -top-12 right-8 z-[100]">
          <Image
            src={paletteImage}
            width={121}
            height={163}
            className="w-[90px] h-[130px] smallTablet:w-[110px] smallTablet:h-[150px] tablet:w-[121px] tablet:h-[163px]"
            alt="paletteImg"
          />
        </div>
        <motion.div className="w-full overflow-hidden" layout>
          <Image
            src={imageList[0]}
            alt="main-image"
            width={940}
            height={625}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {width < 600 ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={width < 380 ? 3 : width < 450 ? 4 : 5}
            freeMode={true}
            className="w-full"
          >
            {imageList.slice(1).map((image, index) => (
              <SwiperSlide key={index + 1}>
                <motion.div
                  className="h-[75px] w-[75px] overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleImageClick(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`image-${index + 1}`}
                    width={75}
                    height={75}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex gap-2 desktop:gap-4">
            {imageList.slice(1).map((image, index) => (
              <motion.div
                key={index + 1}
                className="h-[100px] smallLaptop:h-[75px] desktop:h-[100px] w-[100px] smallLaptop:w-[75px] desktop:w-[100px] overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleImageClick(index + 1)}
              >
                <Image
                  src={image}
                  alt={`image-${index + 1}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 tablet:gap-8">
        <div className="flex flex-col gap-2 tablet:gap-4">
          <div
            className="text-3xl desktop:text-4xl text-natural-style font-medium"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>

          <div className="flex gap-2 flex-wrap">
            {propsList.map((prop, id) => (
              <div
                key={id}
                className="text-center text-nowrap rounded-full font-medium bg-transparent border-home-coziness border smallLaptop:text-sm desktop:text-base px-3 py-1"
              >
                {prop}
              </div>
            ))}
            <div className="text-center text-nowrap rounded-full font-medium bg-human-detail border-home-coziness border smallLaptop:text-sm desktop:text-base px-3 py-1">
              НОВИНКА
            </div>
          </div>
          <div>
            <div className="uppercase text-home-coziness">В доме:</div>
            <ul className="custom-list smallLaptop:text-sm desktop:text-base">
              <li>
                открытая веранда с панорамными окнами (37 м²), стол, 6 стульев,
                качели
              </li>
              <li>собственная баня (оплачивается отдельно)</li>
              <li>подогреваемая купель (оплачивается отдельно)</li>
              <li>две двуспальные кровати с белоснежным постельным бельем</li>
              <li>кондиционер</li>
              <li>банные полотенца</li>
              <li>набор косметической продукции</li>
              <li>тапочки</li>
              <li>фен</li>
              <li>холодильник с морозильной камерой</li>
              <li>кофемашина, чайник и чайные принадлежности</li>
              <li>зона барбекю с мангалом и шампура</li>
              <li>парковочное место на 2 машины</li>
              <li>телевизор и Wi-Fi</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {booking ? (
            <div className="mt-6">
              <a
                href={`?tl-booking-open=true&room-type=${link}`}
                className="text-lg uppercase bg-home-coziness rounded-full text-white py-5 px-10 smallTablet:px-16"
              >
                Забронировать
              </a>
            </div>
          ) : (
            <Link
              href={link}
              className="uppercase font-medium flex gap-4 text-lg desktop:text-xl text-home-coziness items-center"
            >
              <div>(Подробнее)</div>
              <div className="w-full">
                <Image
                  src="/main/arrow-right-long.svg"
                  alt="arrow"
                  width={200}
                  height={200}
                  className="object-cover smallLaptop:w-full h-full"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewApartmentCard;
