"use client";

import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

const YandexMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const mapState = {
    center: [55.751244, 37.618423], // Coordinates for Moscow
    zoom: 10, // Adjust zoom level to your liking
    controls: [],
  };

  const mapOptions = {
    suppressMapOpenBlock: true,
    yandexMapAutoSwitch: false,
    yandexMapDisableMapOpenBlock: true,
  };

  return (
    <div className="w-full h-full">
      {isLoaded && (
        <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_API_KEY }}>
          <Map
            defaultState={mapState}
            options={mapOptions}
            className="w-full h-full"
          />
        </YMaps>
      )}
    </div>
  );
};

export default YandexMap;
