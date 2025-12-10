"use client";

import React, { useEffect, useState } from "react";
// Импорт CSS-файла, если он необходим для стилизации спиннера и пр.
// import "./BookingEngine.css";

// Extend Window interface to include BookingIframe
declare global {
  interface Window {
    BookingIframe: any;
  }
}

interface BnovoIframeOptions {
  html_id: string;
  uid: string;
  lang: string;
  width: string;
  height: string;
  rooms: string;
  IsMobile: string;
  scroll_to_rooms: string;
  fixed_header_selector: string;
  fixed_mobile_header_width: number;
  fixed_mobile_header_selector: string;
  fixed_footer_selector: string;
  fixed_mobile_footer_width: number;
  fixed_mobile_footer_selector: string;
}

// Конфигурация Bnovo (вынесена для чистоты)
const BNOVO_CONFIG: BnovoIframeOptions = {
  html_id: "booking_iframe",
  uid: "3ca65b3d-7977-42c9-b241-ad1b05cdca95", // Ваш UID
  lang: "ru",
  width: "auto",
  height: "auto",
  rooms: "",
  IsMobile: "0",
  scroll_to_rooms: "0",
  fixed_header_selector: "",
  fixed_mobile_header_width: 800,
  fixed_mobile_header_selector: "",
  fixed_footer_selector: "",
  fixed_mobile_footer_width: 800,
  fixed_mobile_footer_selector: "",
};

const BookingEngine: React.FC = () => {
  // 🛑 Используем явный тип React.FC
  // 1. Добавляем состояние загрузки
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверка, чтобы скрипт не добавлялся дважды
    if (document.getElementById("bnovo-iframe-script")) {
      setIsLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.id = "bnovo-iframe-script";
    script.src =
      "https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js";
    script.async = true;

    script.onload = () => {
      // 🛑 Проверяем наличие конструктора с учетом типизации
      if (window.BookingIframe) {
        // 🛑 Инициализация с использованием типизированного конструктора
        const BnovoBookFrame = new window.BookingIframe(BNOVO_CONFIG);
        BnovoBookFrame.init();

        // 2. Завершаем загрузку после инициализации модуля
        setIsLoading(false);
      } else {
        console.error("Bnovo BookingIframe is not defined on window.");
        setIsLoading(false);
      }
    };

    document.body.appendChild(script);

    // Очистка
    return () => {
      const existingScript = document.getElementById("bnovo-iframe-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    // Добавляем минимальную высоту, чтобы спиннер не схлопывался
    <div className="relative pb-8 min-h-[60vh] smallLaptop:min-h-[700px]">
      {/* 3. Условный рендеринг спиннера */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Сюда Bnovo загрузит список номеров. Делаем невидимым, пока идет загрузка. */}
      <div
        id="booking_iframe"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      ></div>

      {/* Обязательный копирайт Bnovo */}
      <div
        id="bn_iframe"
        style={{
          fontFamily:
            "'Proxima nova', 'Helvetica Neue', 'Cera Pro Medium', Arial, Helvetica, sans-serif",
          position: "absolute",
          right: 0,
          bottom: 0,
          fontSize: "12px",
          lineHeight: "1em",
          opacity: 0.5,
          zIndex: 10,
          marginTop: "10px",
        }}
      >
        <div style={{ color: "#1403fc", background: "rgba(0, 0, 0, 0)" }}>
          <a
            style={{ color: "#808080", background: "#fff" }}
            href="https://bnovo.ru/bnovo-mb/?utm_source=client_modul_br"
            id="bnovo_link"
            target="_blank"
            rel="noreferrer"
          >
            Система управления отелем Bnovo ©
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingEngine;
