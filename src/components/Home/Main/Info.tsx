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
        <p className="tablet:text-lg mt-5 text-justify font-light">
          Мы — управляющая компания, специализирующаяся на посуточной аренде
          домов и квартир в Москве и Подмосковье. Наша миссия — предоставить вам
          комфортное жильё, где каждая деталь продумана с любовью и заботой. Уже
          много лет команда FlatPoint создает атмосферу уюта, чтобы Вы могли
          полноценно насладиться отдыхом. Мы тщательно подбираем каждый объект
          размещения, чтобы обеспечить высочайшие стандарты качества.
        </p>
      </div>
      <div className="smallLaptop:row-start-1">
        <CompanyCard
          imageUrl="/main/green-lounge.jpg"
          title="Гостевые дома"
          altText="Уютные и стильные гостевые дома расположены в живописном месте — в КП Грин Лаундж вблизи от Истринского водохранилища. Избавьтесь от стресса и восстановите внутреннюю энергию!"
          link="/accommodation/green-lounge"
        />
      </div>
      <div className="mt-4 tablet:text-lg smallLaptop:row-start-2 text-justify flex flex-col gap-6 font-light">
        <p>
          У нас Вы найдете идеальное место как для семейного отдыха, так и для
          деловых поездок. Вы сможете расслабиться или сосредоточиться на важном
          — все остальное мы возьмём на себя. Не упустите возможность
          насладиться красивыми домами и уютными апартаментами, которые мы с
          любовью подготовили для вас.
        </p>
        <span className="italic font-medium text-base">
          С FlatPoint ваш отдых становится по-настоящему особенным!
        </span>
      </div>

      <CompanyCard
        imageUrl="/main/moscow.jpg" // Укажите правильное изображение для Москвы
        title="Квартиры и студии в Москве"
        altText="Наши квартиры и студии в Москве — место, где идеально сочетаются современный комфорт и уют. Насладитесь всеми прелестями столичной жизни!"
        link="/accommodation/moscow"
      />
    </Container>
  );
};

export default Info;
