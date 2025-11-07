"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "@/components/Container";
import "./Gallery.css";

const images = [
  "/main/scroll-1.jpg",
  // "/main/scroll-2.jpg",
  "/main/scroll-3.jpg",
  "/main/scroll-4.jpg",
  "/main/scroll-5.jpg",
  "/main/scroll-6.jpg",
];

const Gallery: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const handleImageClick = (
    index: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    const swiper = swiperRef.current;

    if (swiper) {
      const slidesPerView = swiper.params.slidesPerView;
      const totalSlides = images.length;

      if (slidesPerView === 1) {
        // Логика для 1 слайда
        const slideElement = event.currentTarget as HTMLElement;
        const slideWidth = slideElement.offsetWidth;
        const clickX = event.nativeEvent.offsetX;

        if (clickX < slideWidth / 2) {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      } else if (slidesPerView === 2) {
        // Логика для 2 слайдов
        const activeIndex = swiper.activeIndex; // Текущий активный индекс
        const visibleSlides = [activeIndex, activeIndex + 1]; // Видимые слайды

        if (index === visibleSlides[0]) {
          // Клик на левом слайде — листаем влево
          swiper.slidePrev();
        } else if (index === visibleSlides[1]) {
          // Клик на правом слайде — листаем вправо
          swiper.slideNext();
        }
      } else if (slidesPerView === 3) {
        // Логика для 3 слайдов
        const centerIndex = Math.floor(slidesPerView / 2);
        const targetIndex = index - centerIndex;

        if (swiper.params.loop) {
          const loopedIndex = (targetIndex + totalSlides) % totalSlides;
          swiper.slideToLoop(loopedIndex);
        } else {
          swiper.slideTo(Math.max(0, Math.min(targetIndex, totalSlides - 1)));
        }
      } else {
        // Для других случаев просто перемещаем на индекс
        swiper.slideTo(index);
      }
    }
  };

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-[468px] cursor-pointer"
                onClick={(event) => handleImageClick(index, event)}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover select-none"
                  sizes="100vw"
                  quality={100}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination flex justify-center mt-4"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
