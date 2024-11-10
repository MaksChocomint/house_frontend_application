"use client";

import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";
import Container from "../Container";
import axios from "axios";

interface Apartment {
  id: number;
  name: string;
  images: string[];
  title: string;
  link: string;
  area: number;
  capacity: number;
  rooms: number;
  features: string[];
}

const ApartmentsGrid: React.FC<{ title: string }> = ({ title }) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    // Запрос данных апартаментов с API
    const fetchApartments = async () => {
      try {
        const response = await axios.get("/api/apartments");
        setApartments(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных апартаментов:", error);
      }
    };
    fetchApartments();
  }, []);

  return (
    <Container styles="grid grid-cols-1 tablet:grid-cols-3 gap-y-10 gap-x-10 mt-32">
      <h1 className="text-3xl font-bold text-center col-start-1 col-end-2 tablet:col-end-4">
        {title}
      </h1>
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          images={apartment.images}
          name={apartment.name}
          capacity={apartment.capacity}
          area={apartment.area}
          rooms={apartment.rooms}
          features={apartment.features}
          link={apartment.link}
        />
      ))}
    </Container>
  );
};

export default ApartmentsGrid;
