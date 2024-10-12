"use client";

import React from "react";
import "./DownloadButton.css"; // Импортируем CSS файл

const DownloadButton = () => {
  const handleDownload = () => {
    // URL файла, который нужно скачать
    const fileUrl = "https://drive.google.com/uc?export=download&id=";

    // Создаем элемент <a>
    const link = document.createElement("a");
    link.href = fileUrl;

    // Программно кликаем по ссылке
    link.click();
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      <span>Скачать презентацию</span>
    </button>
  );
};

export default DownloadButton;
