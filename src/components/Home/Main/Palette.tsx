"use client";

import Container from "@/components/Container";
import React from "react";
import ColorCard from "./ColorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const colors = [
  "blue-heaven",
  "mint",
  "softwood",
  "olive",
  "sand",
  "wheat",
  "moonlight",
  "rowan",
];

const Palette = () => {
  return (
    <div className="w-full mt-32 bg-human-detail py-10">
      <Container styles="mt-10">
        <div className="uppercase text-natural-style font-medium text-2xl">
          ВЫБЕРИ ДОМ И/ИЛИ КВАРТИРУ В ПАЛИТРЕ СВОЕГО НАСТРОЕНИЯ!
        </div>
        <div className="mt-8">
          <Swiper
            spaceBetween={5}
            breakpoints={{
              300: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              600: { slidesPerView: 4 },
              800: { slidesPerView: 5 },
              1100: { slidesPerView: 6 },
              1500: { slidesPerView: 7 },
              1700: { slidesPerView: 8 },
            }}
            loop={true}
          >
            {colors.map((color) => (
              <SwiperSlide key={color}>
                <ColorCard color={color} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Palette;
