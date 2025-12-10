"use client";

import React from "react";
import Container from "../Container";
import { useWindowSize } from "@/utils/useWindowSize";

interface InfoProps {
  title: string;
  description: string; // Ожидается текст с <br> для переноса строк
  hasButton: boolean;
}

const Info: React.FC<InfoProps> = ({ title, description, hasButton }) => {
  const { width } = useWindowSize();
  const processedDescription =
    width <= 450 ? description.replace(/<br\s*\/?>/gi, " ") : description;

  // 🛑 НОВАЯ ФУНКЦИЯ: Прокрутка к якорю с отступом (для отображения виджета внизу экрана)
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Предотвращаем стандартный переход по ссылке
    const targetElement = document.getElementById("booking-anchor");

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;

      // Вычисляем позицию для прокрутки:
      // Абсолютная позиция начала виджета - Высота окна + Высота виджета + отступ (40px)
      const scrollTo =
        targetPosition - windowHeight + targetElement.offsetHeight + 40;

      const finalScroll = Math.max(0, scrollTo);

      window.scrollTo({
        top: finalScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container styles="w-full flex flex-col items-start gap-4 mt-32">
      <h2
        className={`${
          title === "Апартаменты" ? "text-4xl" : "text-5xl"
        } smallLaptop:text-6xl font-medium uppercase mb-2 phone:mb-4`}
      >
        {title}
      </h2>

      <p
        className={`text-lg smallLaptop:text-2xl text-pretty text-black`}
        dangerouslySetInnerHTML={{ __html: processedDescription }} // Безопасное использование для разметки
      ></p>
      {hasButton && (
        <a
          href="#booking-anchor" // Оставляем якорь для доступности, если JS не сработает
          onClick={handleScrollToBooking} // 🛑 Используем функцию прокрутки
          className="mt-10 text-lg smallLaptop:text-xl uppercase bg-home-coziness rounded-full text-white py-3 px-10 smallLaptop:py-5 smallLaptop:px-16"
        >
          Забронировать
        </a>
      )}
    </Container>
  );
};

export default Info;
