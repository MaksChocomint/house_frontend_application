"use client";
import React from "react";
import ApartmentCard from "./ApartmentCard";
import Container from "../Container";

interface ApartmentsGridProps {
  title: string;
  apartments: {
    id: number;
    images: string[];
    title: string;
    description: string;
    capacity: number;
    price: number;
  }[];
}

const ApartmentsGrid: React.FC<ApartmentsGridProps> = ({
  title,
  apartments,
}) => {
  const handleBooking = (id: number) => {
    alert(`Бронирование дома с ID: ${id}`);
  };

  return (
    <Container
      styles={"grid grid-cols-1 tablet:grid-cols-2 gap-y-10 gap-x-10 mt-32"}
    >
      <h1 className="text-3xl font-bold text-center col-start-1 col-end-2 tablet:col-end-3">
        {title}
      </h1>
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          images={apartment.images}
          title={apartment.title}
          description={apartment.description}
          capacity={apartment.capacity}
          onBook={() => handleBooking(apartment.id)}
          price={apartment.price}
        />
      ))}
    </Container>
  );
};

export default ApartmentsGrid;
