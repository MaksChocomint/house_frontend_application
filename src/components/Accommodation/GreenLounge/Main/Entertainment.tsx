"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import EntertainmentCard from "./EntertainmentCard";
import "@/components/Home/Main/Gallery.css";
import "swiper/css";
import "swiper/css/pagination";

const entertainments = [
  {
    id: 1,
    title: "ВОСКРЕСЕНСКИЙ<br>НОВО-ИЕРУСАЛИМСКИЙ МОНАСТЫРЬ",
    text: "Исторические памятники на территории монастыря:<ul><li>Палаты царевны Татьяны Михайловны</li><li>Скит Патриарха Никона</li><li>Подземная церковь Константина и Елены</li><li>Гефсиманская часовня и др.</li></ul>",
    image: "/main/entertainment/monastery.jpeg",
    link: "https://n-jerusalem.ru/",
  },
  {
    id: 2,
    title: "СПА-КОМПЛЕКС «LA SOURS D'ISTRA»",
    text: "СПА-комплекс Подмосковья «La Source d’Istra» подарит Вам незабываемое путешествие в мир неги и блаженства ухода за лицом и телом, где предусмотрен индивидуальный подход к каждому гостю.<br><br>Среди услуг: <ul><li>Тренажерный зал</li><li>Бассейн</li><li>Термальная зона</li><li>Велнес-клиника и др.</li></ul>",
    image: "/main/entertainment/spa.jpeg",
    link: "https://m-istra-l.ru/spa-i-vellenes/",
  },
  {
    id: 3,
    title: "КОННО-СПОРТИВНЫЙ КЛУБ «PRIMO POSTO»",
    text: "Клуб оборудован отапливаемым манежем площадью 62х22 м., конкурным и выездковым полями*. Расстояние до клуба от GREEN LOUNGE всего 1,9 км, 4 минуты на машине.<br>Для гостей клуба работает ресторан с европейской кухней. Забронировать столик можно по телефону: +7(936) 520-40-50*<br><br>*посещение клуба осуществляется по предварительной записи;<br>*ресторан работает со среды по воскресенье, с 9:00 до 21:00",
    image: "/main/entertainment/horse.jpeg",
    link: "https://primoposto.tilda.ws/",
  },
  {
    id: 4,
    title: "БАННЫЙ КОМПЛЕКС «БАННИКУМ»",
    text: "<ul><li>Авторские программы парения</li><li>Звукотерапия на музыкальных инструментах</li><li>Индивидуальный подход к банному отдыху</li><li>Полный комплекс услуг</li></ul>",
    image: "/main/entertainment/banya.jpeg",
    link: "https://banniqum.ru/",
  },
];

const Entertainment = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <Container styles="mt-32">
      <Title upperText="Досуг" lowerText="Чем заняться" />
      <div className="relative w-full mt-16">
        <Swiper
          loop={true}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Кастомный класс для стилизации пагинации
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {entertainments.map((ent) => (
            <SwiperSlide key={ent.id}>
              <EntertainmentCard
                image={ent.image}
                title={ent.title}
                text={ent.text}
                link={ent.link}
                onNext={() => swiperInstance?.slideNext()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-4"></div>

        {/* Кастомные индикаторы */}
      </div>
    </Container>
  );
};

export default Entertainment;
