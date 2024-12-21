import Container from "@/components/Container";
import React from "react";
import NewApartmentCard from "./NewApartmentCard";

const NewApartment = () => {
  return (
    <Container styles="mt-48 flex flex-col gap-32">
      <NewApartmentCard
        title="BLACK&WHITE"
        propsList={[
          "18 м²",
          "от 3 241 ₽/сутки",
          "8 минут до метро",
          "до 3 человек",
        ]}
        link="308648"
        images={[
          "/accommodation/moscow/blacknwhite/pic1.jpg",
          "/accommodation/moscow/blacknwhite/pic2.jpg",
          "/accommodation/moscow/blacknwhite/pic3.jpg",
          "/accommodation/moscow/blacknwhite/pic4.jpg",
          "/accommodation/moscow/blacknwhite/pic5.jpg",
          "/accommodation/moscow/blacknwhite/pic6.jpg",
          "/accommodation/moscow/blacknwhite/pic7.jpg",
          "/accommodation/moscow/blacknwhite/pic8.jpg",
          "/accommodation/moscow/blacknwhite/pic9.jpg",
        ]}
        paletteImage="/accommodation/moscow/blacknwhite/pic10.png"
        isMirrored={true}
        booking={true}
      />
    </Container>
  );
};

export default NewApartment;
