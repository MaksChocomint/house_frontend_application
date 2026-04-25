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
  description: string;
  paletteImage: string;
  booking: boolean;
}

const mainImageStyle = {
  aspectRatio: "940/625",
  maxWidth: 940,
  maxHeight: 625,
};

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  title,
  propsList,
  images,
  link,
  description,
  paletteImage,
  booking,
}) => {
  const [imageList, setImageList] = useState(() => [...images]);
  const { width } = useWindowSize();

  const handleImageClick = (clickedIndex: number) => {
    if (clickedIndex === 0) {
      return;
    }

    setImageList((currentImages) => {
      const updatedImages = [...currentImages];
      [updatedImages[0], updatedImages[clickedIndex]] = [
        updatedImages[clickedIndex],
        updatedImages[0],
      ];
      return updatedImages;
    });
  };

  // 🛑 НОВАЯ ФУНКЦИЯ: Прокрутка с отступом
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Предотвращаем стандартное действие якоря
    const targetElement = document.getElementById("booking-anchor");

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;

      // Определяем, куда прокручивать:
      // TargetPosition - ВысотаОкна + ВысотаЭлемента (примерно) + небольшой отступ
      // Здесь мы прокручиваем к точке, где виджет будет внизу экрана.
      const scrollTo =
        targetPosition - windowHeight + targetElement.offsetHeight + 40;

      // Если виджет уже почти внизу или прокрутка не нужна, просто прокручиваем к началу виджета
      const finalScroll = Math.max(0, scrollTo);

      window.scrollTo({
        top: finalScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 items-stretch">
      {/* Правая часть с изображениями */}
      <div className="flex flex-col gap-2 desktop:gap-4 w-full relative">
        <div className="absolute -top-12 right-8 z-[100]">
          <Image
            src={paletteImage}
            width={121}
            height={163}
            className="w-[90px] h-[130px] smallTablet:w-[110px] smallTablet:h-[150px] tablet:w-[121px] tablet:h-[163px]"
            alt="paletteImg"
          />
        </div>
        <motion.div
          className="w-full overflow-hidden relative"
          layout
          style={mainImageStyle}
        >
          <Image
            src={imageList[0]}
            alt="main-image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {width < 950 ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={
              width < 330
                ? 3
                : width < 450
                ? 4
                : width < 500
                ? 5
                : width < 600
                ? 6
                : width < 750
                ? 7
                : 8
            }
            freeMode={true}
            className="w-full"
          >
            {imageList.slice(1).map((image, index) => (
              <SwiperSlide key={image}>
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
          <div className="flex gap-2 desktop:gap-4 justify-between">
            {imageList.slice(1).map((image, index) => (
              <motion.div
                key={image}
                className="h-[50px] w-[50px] smallLaptop:h-[60px] smallLaptop:w-[60px] laptop:h-[65px] laptop:w-[65px] overflow-hidden cursor-pointer"
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
            {propsList.map((prop) => (
              <div
                key={prop}
                className="text-center text-nowrap rounded-full font-medium bg-transparent border-home-coziness border smallLaptop:text-sm desktop:text-base px-3 py-1"
              >
                {prop}
              </div>
            ))}
          </div>
          <div
            className="smallLaptop:text-base mt-6 largeTablet:text-sm text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className="flex flex-col gap-4">
          {booking ? (
            <div className="mt-6">
              <a
                href="#booking-anchor" // Оставляем якорь для доступности
                onClick={handleScrollToBooking} // 🛑 Используем новую функцию прокрутки
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

export default ApartmentCard;
