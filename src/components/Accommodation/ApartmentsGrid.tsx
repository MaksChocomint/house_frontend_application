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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Запрос данных апартаментов с API
    const fetchApartments = async () => {
      if (title === "Квартиры и студии") {
        try {
          setIsLoading(true);
          const response = await axios.get("/api/apartments/location/1");
          setApartments(response.data);
        } catch (error) {
          console.error("Ошибка при загрузке данных апартаментов:", error);
        } finally {
          setIsLoading(false);
        }
      } else if (title === "Гостевые дома") {
        try {
          setIsLoading(true);
          const response = await axios.get("/api/apartments/location/2");
          setApartments(response.data);
        } catch (error) {
          console.error("Ошибка при загрузке данных апартаментов:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchApartments();
  }, []);

  return (
    <Container styles="w-full grid smallTablet:grid-cols-2 smallLaptop:grid-cols-3 gap-y-10 gap-x-10 mt-32">
      <h1 className="text-3xl font-bold text-center col-start-1 smallTablet:col-end-3 smallLaptop:col-end-4">
        {title}
      </h1>

      {isLoading ? (
        <div className="w-full col-start-1 smallTablet:col-end-3 smallLaptop:col-end-4 flex justify-center items-center">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        // Отображение списка апартаментов, если данные загружены
        apartments.map((apartment) => (
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
        ))
      )}
    </Container>
  );
};

export default ApartmentsGrid;
