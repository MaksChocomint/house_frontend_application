import React from "react";
import Info from "./Info";
import ApartmentsGrid from "../../ApartmentsGrid";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <ApartmentsGrid title="Квартиры и студии" />
    </div>
  );
};

export default Main;
