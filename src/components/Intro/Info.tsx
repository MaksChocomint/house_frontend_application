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
      <h2 className="text-4xl tablet:text-5xl laptop:text-6xl font-medium uppercase mb-2 phone:mb-4">
        {title}
      </h2>
      <p
        className={`text-lg tablet:text-2xl text-pretty text-black hidden smallTablet:block`}
        dangerouslySetInnerHTML={{ __html: description }} // Безопасное использование для разметки
      ></p>
      {hasButton && (
        <button className="mt-10 text-xl uppercase bg-home-coziness rounded-full text-white py-5 px-16">
          Забронировать
        </button>
      )}
    </Container>
  );
};

export default Info;
