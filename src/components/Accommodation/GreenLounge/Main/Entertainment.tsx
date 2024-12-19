"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EntertainmentCard from "./EntertainmentCard";
import "@/components/Home/Main/Gallery.css";
import "swiper/css";

const Entertainment = () => {
  const entertainments = [
    {
      id: 1,
      title: "ВОСКРЕСЕНСКИЙ<br>НОВО-ИЕРУСАЛИМСКИЙ МОНАСТЫРЬ",
      text: "Исторические памятники на территории монастыря:<br>Палаты царевны Татьяны Михайловны<br>Скит Патриарха Никона<br>Подземная церковь Константина и Елены<br>Гефсиманская часовня и др.",
      image: "/main/entertainment/monastery.png",
    },
    {
      id: 2,
      title: "СПА-КОМПЛЕКС «LA SOURS D'ISTRA»",
      text: "СПА-комплекс Подмосковья «La Source d’Istra» подарит Вам незабываемое путешествие в мир неги и блаженства ухода за лицом и телом, где предусмотрен индивидуальный подход к каждому гостю.<br>Среди услуг: <br>Тренажерный зал<br>Бассейн<br>Термальная зона<br>Велнес-клиника и др.",
      image: "/main/entertainment/spa.png",
    },
    {
      id: 3,
      title: "КОННО-СПОРТИВНЫЙ КЛУБ «PRIMO POSTO»",
      text: "Клуб оборудован отапливаемым манежем площадью 62х22 м., конкурным и выездковым полями*. Расстояние до клуба от GREEN LOUNGE всего 1,9 км, 4 минуты на машине.<br>Для гостей клуба работает ресторан с европейской кухней. Забронировать столик можно по телефону: +7(936) 520-40-50*<br><br>*посещение клуба осуществляется по предварительной записи;<br>*ресторан работает со среды по воскресенье, с 9:00 до 21:00",
      image: "/main/entertainment/horse.png",
    },
    {
      id: 4,
      title: "БАННЫЙ КОМПЛЕКС «БАННИКУМ»",
      text: "Авторские программы парения<br>Звукотерапия на музыкальных инструментах<br>Индивидуальный подход к банному отдыху<br>Полный комплекс услуг",
      image: "/main/entertainment/banya.png",
    },
    {
      id: 5,
      title: "ФУРАКО ПАРК ",
      text: "Чан на 4-6 человек с горячей водой (растопка к нужному времени). На 7-8 человек бронируется два чана с двумя беседками<br>Теплая беседка-купол с мебелью на четыре персоны<br>Набор полотенец и халатов на четыре персоны<br>За дополнительную плату сервируется сырная тарелка с сыром, мёдом, орехами<br>В услугу входят дрова для дотопки, травяной чай и банная шапка из войлока",
      image: "/main/entertainment/furako.png",
    },
  ];

  return (
    <Container styles="mt-32">
      <Title upperText="Досуг" lowerText="Чем заняться" />
      <div className="relative w-full mt-16">
        <Swiper
          loop={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Кастомный класс для стилизации пагинации
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {entertainments.map((ent, index) => (
            <SwiperSlide key={index}>
              <EntertainmentCard
                image={ent.image}
                title={ent.title}
                text={ent.text}
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
