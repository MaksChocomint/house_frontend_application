import React from "react";
import Info from "./Info";
import Activities from "./Activities";
import ApartmentsGrid from "../../ApartmentsGrid";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col items-center">
      <Info />
      <Activities />
      <ApartmentsGrid title="Гостевые дома" />
    </div>
  );
};

export default Main;
