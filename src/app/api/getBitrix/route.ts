import axios from "axios";
import * as cheerio from "cheerio"; // Импортируем cheerio

export async function GET() {
  try {
    // Выполняем GET-запрос для получения HTML страницы
    const response = await axios.get("https://happykrd.bitrix24.ru/");
    const html = response.data;

    // Загружаем HTML в cheerio для парсинга
    const $ = cheerio.load(html);

    // Пример: получаем заголовок страницы
    const pageTitle = $("title").text();

    return new Response(JSON.stringify({ title: pageTitle }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch and parse the webpage" }),
      { status: 500 }
    );
  }
}
