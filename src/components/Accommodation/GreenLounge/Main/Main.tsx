import React from "react";
import Info from "./Info";
import Activities from "./Activities";
import ApartmentsGrid from "../../ApartmentsGrid";
import { apartmentsData } from "../../apartmentsData";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <Activities />
      <ApartmentsGrid title="Гостевые дома" apartments={apartmentsData} />
    </div>
  );
};

export default Main;
