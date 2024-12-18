"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Gallery.css";

const reviews = [
  {
    id: 1,
    number: "01",
    name: "АННА",
    text: "Все понравилось, все было хорошо! Мы арендовали домик, в нем было все для ребенка, нам ничего своего не потребовалось. Отношение персонала было отличное.",
  },
  {
    id: 2,
    number: "02",
    name: "МИХАИЛ",
    text: "Все было хорошо в последний визит, оформлял заказ на аренду дома на два дня, в нем просторно. И баня устроила, она быстро прогревалась, я пользовался ею самостоятельно, все удобства мне предоставили. И принадлежности для мангальной зоны в наличии, и кухня, и спальня были хорошо оборудованы.",
  },
  {
    id: 3,
    number: "03",
    name: "АНАСТАСИЯ",
    text: "Отличные апартаменты, всё чисто, красиво, удобно. Приятные мелочи вроде шампуня, геля порадовали. Кровать наверху — на любителя, спальное место внизу — прекрасно. Дети порадовались качелям. Решение всех вопросов — очень быстро. Рекомендую.",
  },
  {
    id: 4,
    number: "04",
    name: "ИБРАГИМ",
    text: "Обыскал все вокруг! Считаю их одними из лучших и в сервисе и в цене! Менеджер очень вежливый, тактичный, решает возникающие вопросы быстро! Всегда на связи! Рекомендую!",
  },
  {
    id: 5,
    number: "05",
    name: "АЛЕКСАНДР",
    text: "Отдых прошёл на 5 баллов. Отличная локация, домик оборудован всем необходимым, удалённое заселение. Менеджер всегда был на связи и быстро помогал, когда возникали какие-нибудь вопросы.",
  },
  {
    id: 6,
    number: "06",
    name: "ВИКТОРИЯ",
    text: "Всё соответствует фото, новенькое всё, хорошая уборка, чистота. Арендодатель оперативно отвечал и решал мои вопросы, залог вернули. Понравилось, рекомендую.",
  },
];

const ReviewsCarousel = () => {
  return (
    <div className="mt-12">
      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          728: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Кастомный класс для стилизации пагинации
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-human-detail py-10 px-6 h-[500px] flex flex-col justify-start">
              <h2 className="text-3xl">{`(${review.number})`}</h2>
              <h3 className="text-xl text-home-coziness mt-12">
                {review.name}
              </h3>
              <p className="text-black text-justify mt-4 text-sm phone:text-base largeTablet:text-sm laptop:text-base">
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination flex justify-center mt-4"></div>
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
