import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaTv,
  FaWifi,
  FaSnowflake,
  FaDog,
  FaShower,
  FaBed,
} from "react-icons/fa";
import { BiFridge, BiArea } from "react-icons/bi";
import {
  MdPeople,
  MdCoffeeMaker,
  MdOutlineBedroomParent,
  MdWater,
} from "react-icons/md";

import {
  MdOutlineSensorWindow,
  MdFireplace,
  MdMicrowave,
  MdBalcony,
} from "react-icons/md";

import { BsMusicPlayerFill, BsProjectorFill } from "react-icons/bs";
import { TbIroningFilled } from "react-icons/tb";
import { GiBroom, GiForest, GiFruitTree } from "react-icons/gi";

import {
  PiHairDryerFill,
  PiOvenFill,
  PiWashingMachineFill,
} from "react-icons/pi";
import { IoBed } from "react-icons/io5";
import { FaUnlock } from "react-icons/fa6";

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
      case "Телевизор со Smart TV":
      case "Цифровое тв":
      case "Телевизор":
        return <FaTv title="Телевизор" />;
      case "Wi-Fi":
        return <FaWifi title="Wi-Fi" />;
      case "Кондиционер":
        return <FaSnowflake title="Кондиционер" />;
      case "Кофемашина":
      case "Кофеварка":
        return <MdCoffeeMaker title="Кофемашина" />;
      case "Утюг":
        return <TbIroningFilled title="Утюг" />;
      case "Фен":
        return <PiHairDryerFill title="Фен" />;
      case "Посудомоечная машина":
        return <PiWashingMachineFill title="Посудомоечная машина" />;
      case "Микроволновая печь":
        return <MdMicrowave title="Микроволновая печь" />;
      case "Проектор":
        return <BsProjectorFill title="Проектор" />;
      case "Можно с питомцами":
      case "Можно с животными":
        return <FaDog title="Можно с питомцами" />;
      case "Теплый пол":
        return <MdFireplace title="Теплый пол" />;
      case "Сауна":
        return <MdFireplace title="Сауна" />;
      case "Электронные замки":
        return <FaUnlock title="Электронные замки" />;
      case "Мангал":
      case "Принадлежности для барбекю":
        return <MdFireplace title="Мангал" />;
      case "Вид на сад":
        return <GiFruitTree title="Вид на сад" />;
      case "Духовка":
        return <PiOvenFill title="Духовка" />;
      case "Умная колонка":
        return <BsMusicPlayerFill title="Умная колонка" />;
      case "Банные принадлежности":
        return <GiBroom title="Банные принадлежности" />;
      case "Веранда":
      case "Балкон":
      case "Терраса":
        return <MdBalcony title="Балкон/Терраса" />;
      case "Вид на лес":
        return <GiForest title="Вид на лес" />;
      case "Вид на озеро":
        return <MdWater title="Вид на озеро" />;
      case "Ортопедический матрас":
        return <IoBed title="Ортопедический матрас" />;
      case "Душ":
        return <FaShower title="Душ" />;
      case "Двуспальная кровать":
        return <IoBed title="Двуспальная кровать" />;
      case "Две полутораспальные кровати":
        return <FaBed title="Две полутораспальные кровати" />;
      case "Панорамные окна":
        return <MdOutlineSensorWindow title="Панорамные окна" />;
      case "Холодильник":
        return <BiFridge title="Холодильник" />;
      default:
        return null;
    }
  };

  return (
    <div className="border border-black/30 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-64">
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
            quality={80} // Уменьшает качество до 80 для быстрой загрузки
            sizes="(max-width: 768px) 100vw, 50vw" // Оптимизация для разных экранов
            placeholder="blur" // Плавная загрузка с эффектом размытия
            blurDataURL="/placeholder-image.jpg" // Путь к изображению-заглушке
            className="object-cover"
            priority={currentImage === 0} // Для первой картинки ставим приоритет
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
          <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
          <div className="flex space-x-4 justify-center items-center">
            <span className="flex items-center text-sm text-gray-600">
              <MdPeople className="mr-1" size={20} /> до {capacity} мест
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <BiArea className="mr-1" size={20} /> {area} м²
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <MdOutlineBedroomParent className="mr-1" size={20} /> {rooms}{" "}
              комн.
            </span>
          </div>
        </div>

        <a
          href={`?tl-booking-open=true&room-type=${link}`}
          className="mt-4 w-full font-bold bg-yellow-500 text-center text-white py-2 px-4 rounded-lg"
        >
          Забронировать
        </a>
      </div>
    </div>
  );
};

export default ApartmentCard;
