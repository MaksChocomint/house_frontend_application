import Container from "@/components/Container";
import React from "react";
import NewApartmentCard from "./NewApartmentCard";

const NewApartment = () => {
  return (
    <Container styles="mt-48 flex flex-col gap-32">
      <NewApartmentCard
        title="POINT 486<br>Медовый"
        propsList={["70 м²", "от 7 850 ₽/сутки", "до 6 человек"]}
        link="308326"
        images={[
          "/accommodation/green-lounge/honey/pic9.jpg",
          "/accommodation/green-lounge/honey/pic1.jpg",
          "/accommodation/green-lounge/honey/pic2.jpg",
          "/accommodation/green-lounge/honey/pic3.jpg",
          "/accommodation/green-lounge/honey/pic4.jpg",
          "/accommodation/green-lounge/honey/pic5.jpg",
          "/accommodation/green-lounge/honey/pic6.jpg",
          "/accommodation/green-lounge/honey/pic7.jpg",
          "/accommodation/green-lounge/honey/pic8.jpg",
        ]}
        paletteImage="/accommodation/green-lounge/honey/pic10.png"
        isMirrored={true}
        booking={true}
      />
    </Container>
  );
};

export default NewApartment;
