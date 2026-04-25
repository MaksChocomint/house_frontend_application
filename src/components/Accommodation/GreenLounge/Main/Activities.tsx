import Container from "@/components/Container";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const activities = [
  {
    id: 1,
    icon: "/accommodation/green-lounge/sun.svg",
    name: "ЛЕТОМ",
    text: "Днем любоваться закатами с берега Истринского водохранилища, а вечером смотреть на звездное небо. Кататься по воде на лодках, сапах и байдарках, а по лесу — на велосипедах. Отправиться на рыбалку, собирать грибы и ягоды в лесу или сходить на пикник. А можно загорать на пляже.",
  },
  {
    id: 2,
    icon: "/accommodation/green-lounge/rainy.svg",
    name: "ОСЕНЬЮ",
    text: "Сидеть на веранде или у костра с горячим какао, уютно завернувшись в плед, играть в настольные игры, медитировать под звуки дождя, слушать музыку, наслаждаясь видами осени из окна.",
  },
  {
    id: 3,
    icon: "/accommodation/green-lounge/snow.svg",
    name: "ЗИМОЙ",
    text: "Лепить снеговиков и строить снежные крепости, кататься на санках, пить глинтвейн и рефлексировать у камина, париться в бане или греться в чане под снежными хлопьями.",
  },
  {
    id: 4,
    icon: "/accommodation/green-lounge/cloud.svg",
    name: "ВЕСНОЙ",
    text: "Бегать по лужам в резиновых сапогах, наслаждаться первыми лучами солнца с открытой веранды и играть в настольные игры.",
  },
];

const Activities = () => {
  return (
    <Container styles="mt-32">
      <div className="flex flex-col smallLaptop:flex-row gap-12 smallLaptop:gap-44 laptop:gap-56">
        <Title upperText="Досуг" lowerText="А ещё..." styles="text-nowrap" />

        <div className="flex gap-8 flex-col text-lg">
          {activities.map((act) => {
            return (
              <div key={act.name} className="flex items-start gap-4">
                <Image
                  src={act.icon}
                  alt="icon"
                  width={42}
                  height={42}
                  className="hidden smallLaptop:block"
                />
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <Image
                      src={act.icon}
                      alt="icon"
                      width={42}
                      height={42}
                      className="block smallLaptop:hidden"
                    />
                    <div className="uppercase text-home-coziness text-xl mt-2">
                      {act.name}
                    </div>
                  </div>
                  <div className="text-justify">{act.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Activities;
