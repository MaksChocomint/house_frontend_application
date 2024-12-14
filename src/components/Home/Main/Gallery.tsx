"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "@/components/Container";
import "./Gallery.css";

const images = [
  "/main/scroll-1.jpg",
  "/main/scroll-2.jpg",
  "/main/scroll-3.jpg",
  "/main/scroll-4.jpg",
  "/main/scroll-5.jpg",
  "/main/scroll-6.jpg",
  "/main/scroll-7.jpg",
];

const Gallery: React.FC = () => {
  return (
    <div className="w-full mt-32">
      <Container>
        <div className="font-medium text-xl tablet:text-2xl smallLaptop:text-3xl text-natural-style">
          МИНИМАЛИСТИЧНЫЙ ДИЗАЙН, НАТУРАЛЬНЫЕ МАТЕРИАЛЫ <br /> И ВНИМАНИЕ К
          КАЖДОЙ ДЕТАЛИ — <br /> МЫ СТАРАЛИСЬ УЧЕСТЬ ВСЕ (ДЛЯ ВАШЕГО КОМФОРТА)
        </div>
      </Container>
      <div className="relative w-full mt-16">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Кастомный класс для стилизации пагинации
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={30} // Пространство между слайдами
          breakpoints={{
            // Для мобильных устройств: 1 слайд
            0: {
              slidesPerView: 1,
            },
            // Для планшетов: 2 слайда
            768: {
              slidesPerView: 2,
            },
            // Для десктопов: 3 слайда
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[468px]">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Кастомные индикаторы */}
        <div className="custom-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  );
};

export default Gallery;
