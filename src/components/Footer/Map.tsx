"use client";

import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

// Данные меток
const placemarks = [
  { id: 177, coordinates: [56.062243, 36.761676] },
  { id: 178, coordinates: [56.062353, 36.761568] },
  { id: 187, coordinates: [56.064062, 36.763571] },
  { id: 242, coordinates: [56.063052, 36.762897] },
  { id: 358, coordinates: [56.064942, 36.764496] },
  { id: 359, coordinates: [56.064811, 36.764209] },
  { id: 367, coordinates: [56.063876, 36.762223] },
  { id: 371, coordinates: [56.063404, 36.761361] },
  { id: 373, coordinates: [56.063122, 36.761155] },
  { id: 374, coordinates: [56.062982, 36.76111] },
  { id: 377, coordinates: [56.062499, 36.761163] },
  { id: 382, coordinates: [56.062394, 36.760292] },
  { id: 383, coordinates: [56.06262, 36.760274] },
  { id: 400, coordinates: [56.065097, 36.763634] },
  { id: 483, coordinates: [56.05983, 36.756905] },
  { id: 484, coordinates: [56.059966, 36.756627] },
  { id: 485, coordinates: [56.060092, 36.756501] },
  { id: 486, coordinates: [56.060207, 36.756366] },
  { id: "желтая, синяя", coordinates: [55.837414, 37.636392] },
  { id: "лофт, черная", coordinates: [55.838061, 37.633293] },
  { id: "ботаника, черно-белая", coordinates: [55.704986, 37.670277] },
  { id: "фонвизина", coordinates: [55.821593, 37.592905] },
];

const YandexMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const mapState = {
    center: [55.859953, 37.120445], // Coordinates for Moscow
    zoom: 9, // Adjust zoom level to your liking
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
          >
            <Clusterer
              options={{
                preset: "islands#invertedYellowClusterIcons",
                groupByCoordinates: false,
                iconColor: "#ffd408",
              }}
            >
              {placemarks.map((placemark, index) => (
                <Placemark
                  key={index}
                  geometry={placemark.coordinates}
                  properties={{
                    iconCaption: placemark.id, // Название метки
                  }}
                  options={{
                    preset: "islands#yellowDotIcon", // Желтая метка
                    iconColor: "#ffd408",
                  }}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
      )}
    </div>
  );
};

export default YandexMap;
