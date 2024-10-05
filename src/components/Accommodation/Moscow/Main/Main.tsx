import React from "react";
import Info from "./Info";
import ApartmentsGrid from "../../ApartmentsGrid";
import { apartmentsData } from "../../apartmentsData";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <ApartmentsGrid title="Квартиры и студии" apartments={apartmentsData} />
    </div>
  );
};

export default Main;
