"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useWindowSize } from "@/utils/useWindowSize";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "./Gallery.css";
import Link from "next/link";

const Entertainment = () => {
  const { width } = useWindowSize();
  const isMobile = width && width < 768;

  const items = [
    {
      id: 1,
      src: "/main/entertainment/moscow.png",
      title: "Москва",
      textColor: "text-white",
    },
    {
      id: 2,
      src: "/main/entertainment/horse.png",
      title: "Конно-спортивный клуб Primo Posto",
      textColor: "text-white",
    },

    {
      id: 4,
      src: "/main/entertainment/vdnh.png",
      title: "ВДНХ",
      textColor: "text-white",
    },
    {
      id: 5,
      src: "/main/entertainment/spa.png",
      title: "Spa-комплекс La Sours d'Istra",
      textColor: "text-white",
    },
    {
      id: 6,
      src: "/main/entertainment/banya.png",
      title: "Банный комплекс",
      textColor: "text-white",
    },
    {
      id: 7,
      src: "/main/entertainment/monastery.png",
      title: "Воскресенский Ново-Иерусалимский монастырь",
      textColor: "text-white",
    },
    {
      id: 8,
      src: "/main/entertainment/ostankino.png",
      title: "Останкинский парк",
      textColor: "text-white",
    },
  ];

  return (
    <Container styles="mt-32 bg-human-detail py-10">
      {isMobile && (
        <Title
          upperText="Досуг"
          lowerText="Точки притяжения"
          styles="text-wrap"
        />
      )}

      {!isMobile && (
        <div className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr] grid-rows-[1fr_1fr_1fr_1.5fr] gap-[6px] smallLaptop:gap-4 h-[750px]">
          <Title
            upperText="Досуг"
            lowerText="Точки притяжения"
            styles="col-start-1 col-end-2 row-start-1 row-end-2 self-center text-wrap break-words"
          />
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`relative rounded-lg overflow-hidden shadow-lg ${
                item.id === 1
                  ? "row-start-2 row-end-4 col-start-1 col-end-2"
                  : item.id === 2
                  ? "col-start-2 col-end-3 row-start-1 row-end-3"
                  : item.id === 3
                  ? "row-start-1 row-end-3 col-start-3 col-end-5"
                  : item.id === 4
                  ? "row-start-4 row-end-5 col-start-1 col-end-2"
                  : item.id === 5
                  ? "row-start-3 row-end-5 col-start-2 col-end-3"
                  : item.id === 6
                  ? "row-start-1 row-end-3 col-start-3 col-end-5"
                  : item.id === 7
                  ? "row-start-3 row-end-5 col-start-3 col-end-4"
                  : "row-start-3 row-end-5 col-start-4 col-end-5"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={item.src} alt={item.title} fill objectFit="cover" />
              <motion.div
                className="absolute inset-0 bg-natural-style bg-opacity-60 flex items-center justify-center opacity-0"
                whileHover={{ opacity: 1 }}
              >
                <div
                  className={`text-center font-medium text-base smallLaptop:text-xl cursor-default ${item.textColor}`}
                >
                  {item.title}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

      {isMobile && (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative mt-10 h-[450px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bg-natural-style bg-opacity-60 bottom-0 h-1/6 w-full flex items-center justify-center">
                  <div
                    className={`text-center font-medium text-xl ${item.textColor}`}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination flex justify-center mt-4"></div>
        </Swiper>
      )}

      <Link
        href="/accommodation/green-lounge"
        className="uppercase font-medium w-full justify-center smallTablet:justify-end flex gap-4 text-lg laptop:text-xl text-home-coziness items-center mt-8"
      >
        <div className="smallTablet:text-nowrap underline underline-offset-8 smallTablet:no-underline">
          (Подробнее, Гостевые дома)
        </div>
        <div className="max-w-200">
          <Image
            src="/main/arrow-right-long.svg"
            alt="arrow"
            width={200}
            height={200}
            className="w-full hidden smallTablet:block"
          />
        </div>
      </Link>
    </Container>
  );
};

export default Entertainment;
