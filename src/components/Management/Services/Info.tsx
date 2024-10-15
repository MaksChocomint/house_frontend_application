import React from "react";
import Container from "@/components/Container";
import ServicesGrid from "./ServicesGrid";
import Image from "next/image";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full mt-16">
      <div className="relative w-full h-96 rounded-[70px] flex items-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-[70px]" />
        {/* Background Image */}
        <Image
          src="/management/services/kitchen.JPG"
          alt="kitchen"
          fill
          quality={100}
          className="z-0 object-cover object-lowCenter rounded-[70px]"
          priority // Оптимизация: устанавливаем приоритет загрузки
        />
        {/* Контент */}
        <div className="relative z-20 flex justify-center items-center p-4 tablet:px-16 w-full text-white">
          <div className="flex flex-col gap-5 w-full text-justify">
            <h1 className="font-bold text-2xl tablet:text-3xl tablet">
              Комплексное управление недвижимостью
            </h1>
            <p className="text-sm tablet:text-base font-light">
              Наша компания предлагает услуги комплексного управления
              недвижимостью, охватывающие основные направления для максимальной
              эффективности и доходности Ваших объектов. Мы вызываем доверие и
              гарантируем высокий уровень сервиса благодаря опыту и
              профессионализму нашей команды.
            </p>
          </div>
        </div>
      </div>
      <ServicesGrid />
      <div className="flex justify-center">
        <p className="font-light text-center border-[3px] border-yellow-500  w-2/3 p-4 rounded-full bg-white">
          Мы понимаем, что сделка с недвижимостью — это важный шаг, и наша
          команда готова предоставить надежную правовую поддержку на каждом
          этапе.
        </p>
      </div>
    </Container>
  );
};

export default Info;
