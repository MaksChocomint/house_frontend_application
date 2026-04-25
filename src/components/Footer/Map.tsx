"use client";

import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

// Updated placemarks data
const placemarks = [
  { id: "Point 177 Черничный", coordinates: [56.062243, 36.761676] },
  { id: "Point 178 Бирюзовый", coordinates: [56.062353, 36.761568] },
  { id: "Point 187 Песочный", coordinates: [56.064062, 36.763571] },
  { id: "Point 194 Карамельный", coordinates: [56.064706, 36.764879] },
  { id: "Point 230 Лимонный", coordinates: [56.063599, 36.763217] },
  { id: "Point 242 Мятный", coordinates: [56.063052, 36.762897] },
  { id: "Point 358 Ореховый", coordinates: [56.064942, 36.764496] },
  { id: "Point 359 Солнечный", coordinates: [56.064811, 36.764209] },
  { id: "Point 367 Лавандовый", coordinates: [56.063876, 36.762223] },
  { id: "Point 369 Восточный", coordinates: [56.063663, 36.761757] },
  { id: "Point 371 Изумрудный", coordinates: [56.063404, 36.761361] },
  { id: "Point 374 Озерный", coordinates: [56.062982, 36.76111] },
  { id: "Point 377 Черемуховый", coordinates: [56.062499, 36.761163] },
  { id: "Point 382 Оливковый", coordinates: [56.062394, 36.760292] },
  { id: "Point 383 Березовый", coordinates: [56.06262, 36.760274] },
  { id: "Point 392 Соломенный", coordinates: [56.064248, 36.761702] },
  { id: "Point 400 Кедровый", coordinates: [56.065097, 36.763634] },
  { id: "Point 483 Хвойный", coordinates: [56.05983, 36.756905] },
  { id: "Point 484 Рябиновый", coordinates: [56.059966, 36.756627] },
  { id: "Point 485 Пшеничный", coordinates: [56.060092, 36.756501] },
  { id: "Point 486 Медовый", coordinates: [56.060207, 36.756366] },
  // { id: "Студия Spring Dawn на ВДНХ", coordinates: [55.837414, 37.636392] },
  // { id: "Студия Moonlight на ВДНХ", coordinates: [55.837414, 37.636392] },
  // { id: "Лофт Green Garden на ВДНХ", coordinates: [55.838061, 37.633293] },
  // { id: "Студия Black Pearl на ВДНХ", coordinates: [55.838061, 37.633293] },
  // { id: "Студия Botanica", coordinates: [55.704986, 37.670277] },
  // { id: "Студия White&Black", coordinates: [55.704986, 37.670277] },
  // { id: "Студия Minto Chokoreto", coordinates: [55.821593, 37.592905] },
  // { id: "Студия Aquamarine", coordinates: [55.858705, 37.515964] },
  // { id: "Апартаменты Blue Heaven", coordinates: [55.956995, 37.451079] },
];

const mapState = {
  center: [56.063163, 36.760651],
  zoom: 16,
  controls: [],
};

const mapOptions = {
  suppressMapOpenBlock: true,
  yandexMapAutoSwitch: false,
  yandexMapDisableMapOpenBlock: true,
};

const clustererOptions = {
  preset: "islands#invertedBrownClusterIcons",
  groupByCoordinates: false,
  iconColor: "#b69f80",
};

const placemarkOptions = {
  preset: "islands#brownDotIcon",
  iconColor: "#b69f80",
};

const YandexMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full h-full">
      {isLoaded && (
        <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_API_KEY }}>
          <Map
            defaultState={mapState}
            options={mapOptions}
            className="w-full h-full"
          >
            <Clusterer options={clustererOptions}>
              {placemarks.map((placemark) => (
                <Placemark
                  key={placemark.id}
                  geometry={placemark.coordinates}
                  properties={{
                    iconCaption: placemark.id, // Updated label for each placemark
                  }}
                  options={placemarkOptions}
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
