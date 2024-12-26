"use client";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

import Container from "@/components/Container";
import Title from "@/components/Title";
import Link from "next/link";

const Info = () => {
  return (
    <Container styles="flex mt-32 items-start gap-10 justify-between flex-col smallLaptop:flex-row desktop:mr-40">
      <Title upperText="О нас" lowerText="Привет!" />
      <div className="flex flex-col gap-8 tablet:w-[692px] text-lg text-justify smallLaptop:mt-12">
        <div>
          Мы Екатерина и Александра — основатели компании FLATPOINT. Помимо
          аренды домов в Подмосковье и квартир в Москве мы также предлагаем
          услуги комплексного управления недвижимостью для максимальной
          эффективности и доходности Ваших объектов. Мы гарантируем высокий
          уровень сервиса благодаря опыту и профессионализму нашей команды. В
          этой сфере мы уже более 3 лет и очень любим то, чем занимаемся!
        </div>

        <Link
          className="flex items-center justify-center gap-4 mt-4 text-white text-lg smallLaptop:text-xl uppercase bg-home-coziness rounded-full text-text py-3 px-10 smallLaptop:py-5 smallLaptop:px-16"
          href="https://yadi.sk/i/f7a1jsm8wOgbRQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload size={32} />
          <div>Скачать презентацию</div>
        </Link>
      </div>
    </Container>
  );
};

export default Info;
