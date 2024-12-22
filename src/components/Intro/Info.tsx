"use client";

import React from "react";
import Container from "../Container";

interface InfoProps {
  title: string;
  description: string; // Ожидается текст с <br> для переноса строк
  hasButton: boolean;
}

const Info: React.FC<InfoProps> = ({ title, description, hasButton }) => {
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
        dangerouslySetInnerHTML={{ __html: description }} // Безопасное использование для разметки
      ></p>
      {hasButton && (
        <a
          href="?tl-booking-open=true"
          className="mt-10 text-lg smallLaptop:text-xl uppercase bg-home-coziness rounded-full text-white py-3 px-10 smallLaptop:py-5 smallLaptop:px-16"
        >
          Забронировать
        </a>
      )}
    </Container>
  );
};

export default Info;
