import React from "react";
import ImageCollage from "../../ImageCollage";
import Container from "@/components/Container";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:flex-row smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full">
      <ImageCollage
        images={[
          "/about/green-lounge/collage/house.jpg",
          "/about/green-lounge/collage/kitchen.jpg",
          "/about/green-lounge/collage/bedroom.jpg",
        ]}
      />
      <div className="flex flex-col smallLaptop:justify-start gap-6 w-full smallLaptop:w-1/3">
        <h1 className="font-bold tracking-wide text-2xl uppercase text-start">
          Грин Лаундж
        </h1>
        <div className="flex flex-col gap-4 font-light">
          <p className="text-pretty">
            Наши гостевые дома расположены в КП Грин Лаундж рядом с рекой Истра
            и лесом. В реке можно купаться, плавать на лодке, сплавляться на
            байдарках, SUP бордах и рыбачить. Прекрасный панорамный вид и чистый
            свежий воздух помогут снять стресс и восполнить заряд энергии. Наши
            дома максимально комфортные и стильные. Вы можете делать красивые
            фото и видео, но главное - прекрасно проводить время вдали от
            городской суеты!
          </p>

          <p className="text-pretty">
            Прекрасный панорамный вид и чистый свежий воздух помогут снять
            стресс и восполнить заряд энергии.
          </p>

          <p className="text-pretty">
            Наши дома максимально комфортные и стильные. Вы можете делать
            красивые фото и видео, но главное - прекрасно проводить время вдали
            от городской суеты!
          </p>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Info;
