import React from "react";
import YandexMap from "./Map";
import Socials from "../Socials";

const MapContainer = () => {
  return (
    <div className="w-full h-[550px] relative justify-center items-center smallTablet:mt-0 mt-48">
      <YandexMap />
      <div className="py-8 p-8 tablet:p-10 bg-clean-space border-t-2 w-full smallTablet:w-auto justify-center border-home-coziness smallTablet:border-t-0 flex flex-col items-center smallTablet:items-start smallTablet:flex-nowrap smallTablet:justify-between flex-wrap gap-4 absolute top-0 smallTablet:top-1/2 -translate-y-1/2 tablet:left-56">
        <h1 className="text-3xl uppercase font-medium">Flatpoint</h1>
        <div className="tablet:text-xl tablet:text-start text-center">
          +7 (980) 697 73 81
          <br />
          info@flatpoint.ru
        </div>
        <div className="w-[255px] text-base text-center smallTablet:text-start">
          46 км от МКАД <br /> городской округ Истра, <br /> деревня Якунино,
          <br />
          центральная улица, 377
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default MapContainer;
