import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ApartmentCardProps {
  images: string[];
  title: string;
  description: string;
  capacity: number;
  price: number; // Цена за сутки
  onBook: () => void; // Функция для бронирования
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  images,
  title,
  description,
  capacity,
  price,
  onBook,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-80">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Плавный переход
          className="absolute inset-0"
        >
          <Image
            src={images[currentImage]}
            alt={title}
            fill
            className="object-cover"
            priority // Предварительная загрузка изображения
          />
        </motion.div>
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2"
            >
              <IoIosArrowForward />
            </button>
          </>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-base text-gray-500">
            Вместимость: до {capacity} человек
          </p>
        </div>
        <div>
          <p className="mt-8 text-base font-bold text-gray-800">
            От {price} рублей за сутки {/* Изменён формат отображения цены */}
          </p>
          <button
            onClick={onBook}
            className="mt-6 w-full font-bold bg-yellow-500 text-white py-3 rounded-lg"
          >
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
