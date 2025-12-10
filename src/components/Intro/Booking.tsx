"use client";

import React, { useEffect, useState } from "react"; // 🛑 Удалены useCallback и useRef
import "./Booking.css";

// 🛑 ВАЖНО: Убедитесь, что BnovoWidgetOptions объявлен глобально в .d.ts
interface BnovoWidget {
  init: (callback: () => void) => void;
  open: (id: string, config: Record<string, any>) => void;
}

declare global {
  interface Window {
    Bnovo_Widget?: BnovoWidget;
  }
}

// Конфигурация виджета Bnovo (Остается без изменений)
const BNOVO_CONFIG: Record<string, any> = {
  type: "horizontal",
  uid: "3ca65b3d-7977-42c9-b241-ad1b05cdca95",
  lang: "ru",
  currency: "RUB",
  widp_mobile: "on", // Bnovo будет использовать это для определения мобильного режима
  width: "100%",
  width_mobile: "100%",
  background: "#e2dbc9",
  background_mobile: "#e2dbc9",
  bg_alpha: "100",
  bg_alpha_mobile: "100",
  border_color_mobile: "#C6CAD3",
  padding: "30",
  padding_mobile: "20",
  border_radius: "0",
  button_font_size: "14",
  button_height: "42",
  font_type: "inter",
  title: "Забронировать онлайн",
  title_mobile: "Забронировать онлайн",
  title_color: "#9b7a4e",
  title_color_mobile: "#9b7a4e",
  title_size: "24",
  title_size_mobile: "22",
  inp_color: "#000",
  inp_bordhover: "#9b7a4e",
  inp_bordcolor: "#BCBCBC",
  inp_alpha: "90",
  btn_background: "#9b7a4e",
  btn_background_over: "#ffffff",
  btn_textcolor: "#FFFFFF",
  btn_textover: "#9b7a4e",
  btn_bordcolor: "#9b7a4e",
  btn_bordhover: "#9b7a4e",
  min_age: "0",
  max_age: "17",
  adults_default: "1",
  dates_preset: "on",
  dfrom_today: "on",
  dfrom_value: "2",
  dto_nextday: "on",
  dto_value: "2",
  cancel_color: "#FFFFFF",
  url: "http://localhost:3000/booking",
  onlyrooms:
    "608959,608960,608961,608962,608963,608964,608965,608967,608968,608969,608970,608971,608972,608973,608974,608975,608978,608979",
  firstroom: "608959",
  hide_minimal_prices: "on",
  switch_mobiles: "on",
  switch_mobiles_width: "800",
};

const Booking: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверка, чтобы не дублировать скрипт при ре-рендере
    if (document.getElementById("bnovo-widget-script")) {
      // Если скрипт уже есть, считаем, что виджет уже загружен
      setIsLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.id = "bnovo-widget-script";
    script.src = "//widget.reservationsteps.ru/js/bnovo.js";
    script.async = true;

    script.onload = () => {
      const Bnovo_Widget = window.Bnovo_Widget as BnovoWidget | undefined;

      // Инициализация Bnovo после загрузки скрипта
      if (Bnovo_Widget) {
        Bnovo_Widget.init(function () {
          Bnovo_Widget.open("_bn_widget_", BNOVO_CONFIG);
          setIsLoading(false); // Скрываем спиннер после инициализации
        });
      } else {
        // Если скрипт загрузился, но глобальный объект не появился
        setIsLoading(false);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Очистка скрипта при размонтировании (чтобы не мешать другим страницам)
      const existingScript = document.getElementById("bnovo-widget-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []); // 🛑 Пустой массив зависимостей: загрузка только при монтировании

  return (
    <div id="block-search" className="relative">
      <div className="tl-container">
        {/* Контейнер для Bnovo */}
        {isLoading && (
          <div className="h-24 py-2 bg-human-detail flex justify-center items-center">
            <div className="loading-spinner"></div> {/* Ваш спиннер */}
          </div>
        )}
        <div
          className="left"
          id="_bn_widget_"
          style={{ display: isLoading ? "none" : "block" }} // Скрываем блок, пока грузится
        >
          {/* Эта ссылка обычно скрывается самим виджетом Bnovo */}
          <a
            href="https://bnovo.ru/"
            id="_bnovo_link_"
            target="_blank"
            rel="noreferrer"
            className="hidden" // Прячем ссылку
          >
            Bnovo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
