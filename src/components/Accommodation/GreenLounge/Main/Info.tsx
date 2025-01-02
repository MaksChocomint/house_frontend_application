import React from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";

const Info = () => {
  return (
    <Container styles="flex items-start gap-10 justify-between flex-col smallLaptop:flex-row desktop:mr-40">
      <Title upperText="Проживание" lowerText="Гостевые дома" />
      <div className="flex flex-col gap-8 tablet:w-[740px] text-lg">
        <div className="text-justify">
          Дома FLATPOINT расположены в живописным месте КП Грин Лаундж в 62 км
          от МКАД. В близи Истра и Истринское водохранилище, где можно
          насладиться чистым воздухом, тишиной и спокойствием.
        </div>
        <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-16 items-start justify-between text-justify">
          <div className="tablet:w-[53%] text-base">
            Каждый дом имеет уникальный интерьер, который вы можете подобрать
            под свое настроение и провести в нем время с семьей или устроить
            мероприятие. В каждом доме расположена двуспальная широкая кровать c
            белоснежным постельным бельем, ванной комнатой с пушистыми
            полотенцами и одноразовыми зубными наборами.
          </div>
          <div className="flex tablet:w-1/2 flex-col gap-4 text-justify">
            <div className="text-base">
              Мы продумали каждую деталь с заботой о вашем комфорте. Круглый год
              в домах тепло и уютно, продумана вентиляция и есть большие
              панорамные окна с видом на настоящую природу. Здесь не будет
              скучно как взрослым, так и детям.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
