"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Импортируем Framer Motion для анимаций
import { useRouter } from "next/navigation";
import { useWindowSize } from "@/utils/useWindowSize";

interface CompanyCardProps {
  imageUrl: string;
  title: string;
  altText: string;
  link: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  imageUrl,
  title,
  altText,
  link,
}) => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 860;
  return !isMobile ? (
    <motion.div
      className="relative w-full h-[22rem] overflow-hidden rounded-3xl shadow-xl cursor-default"
      whileHover="hover" // Анимация активируется при наведении на карточку
      initial="initial"
    >
      {/* Затемнение и анимация изображения */}
      <motion.div
        className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-black bg-opacity-20"
        variants={{
          hover: { backgroundColor: "rgba(0, 0, 0, 0.6)" }, // Сильное затемнение при наведении
          initial: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      {/* Картинка с анимацией увеличения */}
      <motion.div
        className="absolute inset-0"
        variants={{
          hover: { scale: 1.1 }, // Увеличение изображения при наведении
          initial: { scale: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // Плавная анимация увеличения
      >
        <Image
          src={imageUrl}
          alt={imageUrl}
          fill
          quality={100}
          className="z-0 object-cover"
        />
      </motion.div>

      {/* Контент */}
      <motion.div className="relative z-20 text-white shadow-lg flex flex-col justify-center items-center h-full">
        {/* Тайтл, который виден всегда */}
        <motion.h1
          className="font-bold text-2xl drop-shadow-md"
          variants={{
            hover: { translateY: -20 }, // При наведении тайтл поднимается вверх
            initial: { translateY: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Alt Text и кнопка появляются и исчезают при наведении */}
        <motion.div
          className="flex flex-col items-center"
          variants={{
            hover: { opacity: 1, translateY: 0 }, // Контент появляется и поднимается при наведении
            initial: { opacity: 0, translateY: 20 }, // Изначально скрыт и немного сдвинут вниз
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm w-2/3 text-center">{altText}</p>

          {/* Кнопка "Подробнее" */}
          <motion.button
            className="mt-4 px-6 py-2 bg-yellow-500 rounded-full text-black font-semibold"
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push(link)}
          >
            Подробнее
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  ) : (
    <div className="relative w-full h-[22rem] overflow-hidden rounded-3xl shadow-xl cursor-default">
      {/* Затемнение и анимация изображения */}
      <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-black bg-opacity-40" />

      {/* Картинка с анимацией увеличения */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          quality={100}
          className="z-0 object-cover"
        />
      </div>

      {/* Контент */}
      <div className="relative z-20 text-white shadow-lg flex flex-col gap-8 justify-center items-center h-full">
        {/* Тайтл, который виден всегда */}
        <h1 className="font-bold text-2xl drop-shadow-md text-center">
          {title}
        </h1>

        {/* Alt Text и кнопка появляются и исчезают при наведении */}
        <div className="flex flex-col items-center">
          <p className="text-sm w-2/3 text-center p-4 bg-black/40 rounded-xl">
            {altText}
          </p>

          {/* Кнопка "Подробнее" */}
          <button
            className="mt-4 px-6 py-2 bg-yellow-500 rounded-full text-black font-semibold hover:scale-110 transition-transform"
            onClick={() => router.push(link)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
