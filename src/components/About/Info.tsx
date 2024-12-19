"use client";
import React from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";

const Info = () => {
  return (
    <Container styles="flex mt-32 items-start gap-10 justify-between flex-col smallLaptop:flex-row desktop:mr-40">
      <Title upperText="О нас" lowerText="Привет!" />
      <div className="flex flex-col gap-8 tablet:w-[692px] text-lg text-justify smallLaptop:mt-12">
        Мы Екатерина и Александра — основатели компании FLATPOINT. Помимо аренды
        домов в Подмосковье и квартир в Москве мы также предлагаем услуги
        комплексного управления недвижимостью для максимальной эффективности и
        доходности Ваших объектов. Мы гарантируем высокий уровень сервиса
        благодаря опыту и профессионализму нашей команды. В этой сфере мы уже
        более 3 лет и очень любим то, чем занимаемся!
      </div>
    </Container>
  );
};

export default Info;
