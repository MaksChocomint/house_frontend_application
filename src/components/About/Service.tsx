import React from "react";
import Container from "../Container";
import Title from "../Title";
import Image from "next/image";

const Service = () => {
  const services = [
    {
      id: 1,
      number: "01",
      name: "ДОХОДНОЕ УПРАВЛЕНИЕ ГОРОДСКОЙ И ЗАГОРОДНОЙ НЕДВИЖИМОСТЬЮ",
      text: "Мы сдаем объекты в краткосрочную и другие виды аренды. Все денежные средства поступают на счет собственника, а управляющая компания получает вознаграждение, которое зависит от результатов деятельности, обеспечивая Вам максимальную прибыль.",
    },
    {
      id: 2,
      number: "02",
      name: "ПОДБОР КВАРТИР И АПАРТАМЕНТОВ",
      text: "Мы помогаем подобрать квартиру и апартаменты как для личного, так и для коммерческого использования. Клиент оплачивает фиксированное вознаграждение за качественное выполнение услуги.",
    },
    {
      id: 3,
      number: "03",
      name: "ХОУМСТЕЙДЖИНГ ОБЪЕКТОВ НЕДВИЖИМОСТИ",
      text: "Мы помогаем подготовить Ваш объект к продаже или сдаче в аренду, при этом используя профессиональные приемы хоумстейджинга. Это повысит привлекательность недвижимости и ускорит её реализацию.",
    },
    {
      id: 4,
      number: "04",
      name: "РЕМОНТ ПОД КЛЮЧ",
      text: "Наша команда предлагает услуги ремонта под ключ, обеспечивая высокое качество работ и соблюдение сроков. Это позволит Вам избежать лишние хлопоты и сосредоточиться на своих делах.",
    },
    {
      id: 5,
      number: "05",
      name: "КОНСУЛЬТИРОВАНИЕ ЗАСТРОЙЩИКОВ КОТТЕДЖНЫХ ПОСЕЛКОВ",
      text: "Обеспечиваем полный цикл консультирования застройщиков от выбора локации до разработки концепции проектов. Наши эксперты помогут вам успешно реализовать ваши замыслы.",
    },
    { id: 6, number: "", name: "", text: "" },
    {
      id: 7,
      number: "06",
      name: "СОПРОВОЖДЕНИЕ ИНДИВИДУАЛЬНОГО СТРОИТЕЛЬСТВА ЗАГОРОДНОГО ДОМА",
      text: "Сопровождаем строительство загородного дома, начиная от выбора места и проектирования, заканчивая фактическим строительством и вводом в эксплуатацию. Мы гарантируем профессиональный подход на каждом этапе.",
    },
    {
      id: 8,
      number: "07",
      name: "ПОЛНЫЙ ЦИКЛ СОПРОВОЖДЕНИЯ СДЕЛОК С НЕДВИЖИМОСТЬЮ",
      text: "Обеспечиваем полное сопровождение сделки от её начала до завершения, включая регистрацию права собственности и прочие необходимые в государственных органах действия.",
    },
    {
      id: 9,
      number: "08",
      name: "СОПРОВОЖДЕНИЕ ЮРИДИЧЕСКИХ СПОРОВ",
      text: "В случае возникновения споров или конфликтных ситуаций, наши юристы готовы оказать квалифицированную помощь в урегулировании разногласий любого плана.",
    },
  ];
  return (
    <Container styles="mt-32">
      <Title upperText="Услуги" lowerText="Чем мы можем быть полезны?" />
      <div className="grid grid-cols-1 smallTablet:grid-cols-2 smallLaptop:grid-cols-3 gap-6 mt-12">
        {services.map((service) => {
          if (service.id !== 6)
            return (
              <div
                key={service.name}
                className="bg-human-detail select-none py-10 px-6 h-[500px] flex flex-col justify-start"
              >
                <h2 className="text-3xl">{`(${service.number})`}</h2>
                <h3 className="text-xl w-11/12 text-home-coziness mt-4 h-36">
                  {service.name}
                </h3>

                <p className="text-black text-justify text-sm phone:text-base largeTablet:text-sm laptop:text-base">
                  {service.text}
                </p>
              </div>
            );
          else
            return (
              <div
                key={service.name}
                className="select-none py-10 px-6 h-[500px] w-full relative col-span-1 smallTablet:col-span-2 smallLaptop:col-span-1 row-start-5 smallTablet:row-start-3 smallLaptop:row-start-auto"
              >
                <Image
                  src="/about/service.jpg"
                  alt="service-img"
                  fill
                  className="object-cover"
                />
              </div>
            );
        })}
      </div>
    </Container>
  );
};

export default Service;
