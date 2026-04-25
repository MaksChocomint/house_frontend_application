// @/components/Apartments.tsx

import Container from "@/components/Container";
import ApartmentCard from "./ApartmentCard";
// 🛑 ИМПОРТ: Импортируем массив данных
import { apartmentsData } from "@/data/apartmentsData";

const Apartments = () => {
  return (
    <Container styles="mt-48 flex flex-col gap-32 mb-12">
      <div className="grid grid-cols-1 largeTablet:grid-cols-2 gap-y-36 gap-x-12">
        {/* 🛑 ОПТИМИЗАЦИЯ: Использование метода map для рендеринга */}
        {apartmentsData.map((apartment) => (
          <ApartmentCard
            // Важно использовать уникальный ключ
            key={apartment.link}
            title={apartment.title}
            propsList={apartment.propsList}
            description={apartment.description}
            link={apartment.link}
            images={apartment.images}
            paletteImage={apartment.paletteImage}
            booking={apartment.booking}
          />
        ))}
      </div>
    </Container>
  );
};

export default Apartments;
