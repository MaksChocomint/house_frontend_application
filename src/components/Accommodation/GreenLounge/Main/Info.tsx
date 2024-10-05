import React from "react";
import ImageCollage from "../../ImageCollage";
import Container from "@/components/Container";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:flex-row smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full">
      <ImageCollage
        images={[
          "/accommodation/green-lounge/collage/house.jpg",
          "/accommodation/green-lounge/collage/kitchen.jpg",
          "/accommodation/green-lounge/collage/bedroom.jpg",
        ]}
      />
      <div className="flex flex-col smallLaptop:justify-start gap-6 w-full smallLaptop:w-1/3">
        <h1 className="font-bold tracking-wide text-2xl uppercase text-start">
          Грин Лаундж
        </h1>
        <div className="flex flex-col gap-4 font-light">
          <p className="text-pretty">
            Наши уютные и стильные гостевые дома расположены в живописном месте
            — в КП Грин Лаундж в непосредственной близости от Истринского
            водохранилища.
          </p>

          <p className="text-pretty">
            Благодаря великолепному панорамному виду и чистому свежему воздуху,
            вы сможете избавиться от стресса и восстановить заряд энергии. Наши
            дома созданы с заботой о вашем комфорте, а их стильный интерьер
            сделает ваше пребывание ещё более приятным.
          </p>

          <p className="text-pretty">
            Проведите время с близкими, откройте для себя новый уровень отдыха
            вдали от городской суеты и насладитесь каждым моментом в гостевых
            домах Flatpoint!
          </p>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Info;
