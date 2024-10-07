import React from "react";
import Container from "@/components/Container";
import ReviewsGrid from "./ReviewsGrid";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:flex-row smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full">
      <ReviewsGrid />
    </Container>
  );
};

export default Info;
