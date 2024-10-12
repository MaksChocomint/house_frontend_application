import React from "react";
import Container from "@/components/Container";
import Image from "next/image";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:flex-row smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full">
      <div className="flex justify-center items-center gap-10">
        <h2 className="font-semibold text-3xl">
          На данный момент вакансий нет
        </h2>
        <Image
          src="/management/vacancies/no-vacancies.png"
          width={150}
          height={150}
          alt="no-vacancies"
        />
      </div>
    </Container>
  );
};

export default Info;
