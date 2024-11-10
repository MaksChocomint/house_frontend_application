import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTv, FaWifi, FaSnowflake, FaCoffee } from "react-icons/fa";
import { BiFridge, BiArea } from "react-icons/bi";
import { MdPeople } from "react-icons/md";
import { GiBed } from "react-icons/gi";

interface ApartmentCardProps {
  images: string[];
  name: string;
  capacity: number;
  link: string;
  area: number;
  rooms: number;
  features: string[];
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  images,
  name,
  capacity,
  area,
  link,
  rooms,
  features,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  // Функция для рендеринга иконок на основе фич
  const renderIcon = (feature: string) => {
    switch (feature) {
      case "Цифровое тв":
        return <FaTv />;
      case "Wi-Fi":
        return <FaWifi />;
      case "Кондиционер":
        return <FaSnowflake />;
      case "Кофемашина":
        return <FaCoffee />;
      case "Холодильник":
        return <BiFridge />;
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-80">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImage]}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute top-0 left-0 p-2 bg-white/80 flex space-x-4 rounded-br-lg">
          {features.map((feature) => (
            <span key={feature} className="text-lg text-gray-700">
              {renderIcon(feature)}
            </span>
          ))}
        </div>
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
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <div className="flex space-x-4 mt-4">
            <span className="flex items-center text-gray-600">
              <MdPeople className="mr-1" size={20} /> до {capacity} мест
            </span>
            <span className="flex items-center text-gray-600">
              <BiArea className="mr-1" size={20} /> {area} м²
            </span>
            <span className="flex items-center text-gray-600">
              <GiBed className="mr-1" size={20} /> {rooms} комн.
            </span>
          </div>
        </div>

        <a
          href={`?tl-booking-open=true&room-type=${link}`}
          className="mt-2 w-full font-bold bg-yellow-500 text-center text-white py-2 px-4 rounded-lg"
        >
          Выбрать
        </a>
      </div>
    </div>
  );
};

export default ApartmentCard;
