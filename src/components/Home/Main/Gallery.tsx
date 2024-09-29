"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const images = [
  "/green-lounge.jpg",
  "/home-background.jpg",
  "/moscow.jpg",
  "/green-lounge.jpg",
  "/home-background.jpg",
  "/moscow.jpg",
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full mt-32">
      <div className="font-bold text-2xl text-center tracking-wider">
        Забронируйте себе место для незабываемого отдыха!
      </div>
      <div className="relative w-full h-[500px] mt-2 overflow-hidden flex items-center justify-center px-4 smallLaptop:px-0">
        <div className="relative smallLaptop:absolute w-full tablet:w-1/2 h-[90%]">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="object-cover rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>

        {/* Анимированные изображения с фоном */}
        <AnimatePresence>
          <motion.div
            key={currentIndex - 1}
            initial={{ opacity: 0.5, x: -100 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="absolute hidden tablet:block w-1/2 h-[80%] -left-1/3"
          >
            <Image
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt="Previous Image"
              fill
              className="object-cover rounded-2xl"
              sizes="50vw"
              loading="lazy"
            />
          </motion.div>

          {/* Следующее изображение */}
          <motion.div
            key={currentIndex + 1}
            initial={{ opacity: 0.5, x: 100 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
            className="absolute hidden tablet:block w-1/2 h-[80%] -right-1/3"
          >
            <Image
              src={images[(currentIndex + 1) % images.length]}
              alt="Next Image"
              fill
              className="object-cover rounded-2xl"
              sizes="50vw"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Кнопки переключения */}
        <button
          onClick={prevImage}
          className="absolute h-[90%] px-8 left-0 tablet:left-[16%] smallLaptop:left-[18%] top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-white tablet:text-black text-2xl z-10"
        >
          <BsChevronLeft
            className="bg-gray-400 rounded-full bg-opacity-40 tablet:bg-opacity-30 p-2"
            size={40}
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute h-[90%] px-8 right-0 tablet:right-[16%] smallLaptop:right-[18%] top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-white tablet:text-black text-2xl z-10"
        >
          <BsChevronRight
            className="bg-gray-400 rounded-full bg-opacity-40 tablet:bg-opacity-30 p-2"
            size={40}
          />
        </button>

        {/* Индикаторы */}
        <div className="flex justify-center absolute z-[100] bottom-0 left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
