import React from "react";
import Info from "./Info";
import ApartmentsGrid from "../../ApartmentsGrid";
import Entertainment from "./Entertainment";

const Main = () => {
  return (
    <div className="mt-32 w-full flex flex-col">
      <Info />
      <Entertainment />
      <ApartmentsGrid />
    </div>
  );
};

export default Main;
