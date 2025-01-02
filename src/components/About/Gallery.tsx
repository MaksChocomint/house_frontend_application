"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../Home/Main/Gallery.css";

const images = [
  "/about/scroll-2.jpg",
  "/about/scroll-1.jpg",
  "/about/scroll-3.jpg",
  "/about/scroll-4.jpg",
  "/about/scroll-5.jpg",
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
    <div className="w-full mt-32 mb-32">
      <div className="relative w-full mt-16">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination flex justify-center mt-4"></div>
        </Swiper>
        {/* Кастомные индикаторы */}
      </div>
    </div>
  );
};

export default Gallery;
