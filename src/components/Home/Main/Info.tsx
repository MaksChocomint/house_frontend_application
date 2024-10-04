"use client";
import React from "react";
import CompanyCard from "./CompanyCard";
import Container from "@/components/Container";

const Info = () => {
  return (
    <Container
      styles={
        "grid place-items-center grid-cols-1 smallLaptop:grid-cols-2 gap-8"
      }
    >
      <div className="smallLaptop:col-start-2">
        <div className="flex flex-col items-end">
          <h1 className="font-semibold tracking-wider text-2xl text-yellow-500">
            FlatPoint
          </h1>
          <div className="h-0.5 bg-yellow-500 w-1/2"></div>
        </div>
        <p className="tablet:text-lg mt-5 text-justify">
          Мы — управляющая компания, специализирующаяся на посуточной аренде
          домов и квартир в Москве и Московской области. Наша миссия —
          предоставить вам комфортное и незабываемое жильё, где каждая деталь
          продумана с любовью и заботой. На протяжении многих лет команда
          FlatPoint создает атмосферу уюта и спокойствия, чтобы Вы могли
          полноценно насладиться отдыхом. Мы тщательно подбираем каждый объект
          размещения, чтобы обеспечить высочайшие стандарты качества и комфорта.
        </p>
      </div>
      <div className="smallLaptop:row-start-1">
        <CompanyCard
          imageUrl="/green-lounge.jpg"
          title="Грин Лаундж"
          altText="На лужайке, в окружении зелени, расцветали цветы, их яркие лепестки, словно неслышные призывы, привлекали соединение с природой. Ветер шептал древние тайны, и, казалось, сама земля дышала в унисон с каждым движением."
          link="/about/green-lounge"
        />
      </div>
      <p className="mt-4 tablet:text-lg smallLaptop:row-start-2 text-justify">
        Вас ждет загородный отдых вдали от городской суеты, чистый воздух и
        первозданная природа. В наших домах Вы сможете провести время с семьей,
        устроить девичник с бокалом вина, попариться в бане, отдохнуть на
        террасе, и даже сделать на память фото и видео в «инстаграмных»
        локациях! Наша главная цель – обеспечить максимально комфортное
        проживание, чтобы Вы после отдыха не остались равнодушными! Ведь лучшее
        время, проведенное на природе – это время с FlatPoint!
      </p>

      <CompanyCard
        imageUrl="/moscow.jpg" // Укажите правильное изображение для Москвы
        title="Москва"
        altText="На лужайке, в окружении зелени, расцветали цветы, их яркие лепестки, словно неслышные призывы, привлекали соединение с природой. Ветер шептал древние тайны, и, казалось, сама земля дышала в унисон с каждым движением."
        link="/about/moscow"
      />
    </Container>
  );
};

export default Info;
