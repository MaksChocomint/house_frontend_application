"use client";
import React from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";

const Info = () => {
  return (
    <Container styles="flex items-start gap-10 justify-between flex-col smallLaptop:flex-row desktop:mr-40">
      <Title upperText="О нас" lowerText="Что такое<br>Flatpoint" />
      <div className="flex flex-col gap-8 tablet:w-[692px] text-lg">
        <div className="text-justify">
          FLATPOINT — это управляющая компания, специализирующаяся на посуточной
          аренде домов в Подмосковье и квартир в Москве. Наша миссия —
          предоставить вам комфортное жильё, где каждая деталь продумана с
          любовью и заботой. Уже много лет мы создаем атмосферу уюта, чтобы Вы
          могли полноценно насладиться отдыхом. Мы тщательно подбираем каждый
          объект размещения, чтобы обеспечить высокие стандарты качества.
        </div>
        <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-16 items-start justify-between text-justify">
          <div className="tablet:w-1/2">
            Вы сможете расслабиться в доме загородом или сосредоточиться на
            важном в квартирах — все остальное мы берем на себя. В домах и
            квартирах есть все необходимые атрибуты для современного человека,
            которые сравнимы с сервисом отеля высокого класса.
          </div>
          <div className="flex tablet:w-1/2 flex-col gap-4 text-justify">
            <div className="">
              Дома и квартиры FLATPOINT выполнены в минималистичном стиле с
              использованием только натуральных материалов, в основе которых —
              дерево. Атмосфера и интерьер каждого дома, квартиры уникален.
            </div>
            <Link
              href="#"
              className="uppercase font-medium flex gap-2 text-lg text-home-coziness text-nowrap"
            >
              <div>(Больше о копании)</div>
              <Image
                src="/main/arrow-right.svg"
                alt={"arrow"}
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
