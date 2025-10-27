"use client";
import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";

const Info = () => {
  return (
    <Container styles="flex mt-32 items-start gap-16 justify-between flex-col smallLaptop:flex-row desktop:mr-40">
      <div className="flex justify-center w-full smallLaptop:w-auto">
        <Image
          src="/about/we.jpeg"
          alt="основатели flatpoint"
          width={360}
          height={427}
          className="smallLaptop:w-auto w-[360px] h-[427px]"
        />
      </div>
      <div className="flex flex-col gap-8 smallLaptop:w-[652px] text-lg text-justify">
        <Title upperText="О нас" lowerText="Привет!" />
        <div>
          Мы Екатерина и Александра — основатели компании FLATPOINT. Помимо
          аренды домов в Подмосковье и квартир в Москве мы также предлагаем
          услуги комплексного управления недвижимостью для максимальной
          эффективности и доходности Ваших объектов. Мы гарантируем высокий
          уровень сервиса благодаря опыту и профессионализму нашей команды. В
          этой сфере мы уже более 3 лет и очень любим то, чем занимаемся!
        </div>

        <Link
          className="uppercase font-medium flex gap-2 text-lg smallLaptop:text-xl text-home-coziness smallLaptop:items-end flex-col smallLaptop:flex-row text-start"
          href="https://yadi.sk/i/f7a1jsm8wOgbRQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full text-nowrap">
            (Скачать презентацию <br /> с условиями сотрудничества)
          </div>

          <div className="max-w-[340px] smallLaptop:max-w-full">
            <Image
              src="/main/arrow-right-long.svg"
              alt={"arrow"}
              width={100}
              height={100}
              className="h-full w-full" // Изменено на w-auto, чтобы ширина изображения адаптировалась к высоте
            />
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Info;
