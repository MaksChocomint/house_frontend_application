"use client";
import Container from "../Container";

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
  return (
    <Container styles="w-full grid smallTablet:grid-cols-2 smallLaptop:grid-cols-3 gap-y-10 gap-x-10 mt-32">
      <div></div>
    </Container>
  );
};

export default ApartmentsGrid;
