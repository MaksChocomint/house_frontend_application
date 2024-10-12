import React from "react";
import Container from "@/components/Container";
import ServicesGrid from "./ServicesGrid";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:flex-row smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full mt-16">
      <ServicesGrid />
    </Container>
  );
};

export default Info;
