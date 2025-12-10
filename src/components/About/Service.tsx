import React from "react";
import Container from "../Container";

const pros = [
  {
    id: 1,
    name: "ИНДИВИДУАЛЬНЫЙ ПОДХОД",
    text: "Наша команда понимает, что каждый гость уникален, и мы стараемся учитывать его пожелания, создавая комфортные условия, которые подходят именно ему.",
  },
  {
    id: 2,
    name: "ВЫСОКИЙ УРОВЕНЬ СЕРВИСА",
    text: "FLATPOINT стремится предоставить исключительное обслуживание, включая чистоту, порядок и внимание к деталям, что позволяет гостям чувствовать себя как дома.",
  },
  {
    id: 3,
    name: "КАЧЕСТВО ОБЪЕКТОВ",
    text: "Все квартиры и дома тщательно подготавливаются, чтобы гарантировать высокие стандарты качества, включая современное оборудование и уютный интерьер.",
  },
  {
    id: 4,
    name: "ДОСТУПНЫЕ ЦЕНЫ",
    text: "Конкурентоспособные цены в сочетании с высоким качеством сервиса привлекают клиентов и побуждают их возвращаться снова.",
  },
  {
    id: 5,
    name: "ПОЛОЖИТЕЛЬНЫЙ ИМИДЖ И ОТЗЫВЫ",
    text: "Наша репутация строится на положительных отзывах и рекомендациях довольных клиентов, что способствует доверию к бренду FLATPOINT.",
  },
  {
    id: 6,
    name: "УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ",
    text: "Специальные акции, программы лояльности и уникальные предложения для постоянных клиентов делают пребывание у нас еще более привлекательным.",
  },
];

const Pros = () => (
  <Container styles="mt-32">
    <div className="flex flex-col smallLaptop:flex-row gap-8 smallLaptop:gap-48">
      <div className="flex flex-col gap-8 smallLaptop:w-[380px]">
        <h2 className="text-6xl font-medium uppercase leading-tight">
          Почему
          <br />
          мы?
        </h2>
        <p className="text-lg">
          Эти факторы способствуют тому, что клиенты выбирают FLATPOINT снова и
          снова, оценивая качество и комфорт нашего сервиса.
        </p>
      </div>

      <div className="flex flex-col gap-12 text-lg">
        {pros.map(({ id, name, text }) => (
          <div key={id} className="flex flex-col gap-4">
            <div className="uppercase text-natural-style text-xl">{name}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default Pros;
