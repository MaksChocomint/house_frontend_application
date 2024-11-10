// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createApartment() {
  try {
    // Создаем апартамент "Гостевой дом Черничный"
    const apartment2 = await prisma.apartment.create({
      data: {
        name: "Гостевой дом Черничный",
        capacity: 6,

        link: "299897",
        rooms: 2,
        area: 65,
        features: [
          "Цифровое тв",
          "Wi-Fi",
          "Кондиционер",
          "Холодильник",
          "Кофемашина",
        ],
        images: [
          "https://secure.travelline.ru/resource/images/rt/306853/638653833185612236-64fd7b9b-a0d1-489a-b8e3-eb8dced4bd37",
          "https://secure.travelline.ru/resource/images/rt/306853/638649482933703143-e986c856-2240-437b-a763-1794ac3f8d7e",
          "https://secure.travelline.ru/resource/images/rt/306853/638649482924793817-e9e7ef86-8d14-4c17-8b55-fda8efe96e60",
          "https://secure.travelline.ru/resource/images/rt/306853/638649482921349179-514cca58-ff37-4809-9c14-fc261465431b",
        ], // Пример ссылок на изображения
        location: {
          connect: { id: 2 },
        },
      },
    });

    // // Создаем апартамент "Гостевой дом Бирюзовый"
    // const apartment3 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Бирюзовый",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Кофемашина",
    //       "Утюг",
    //       "Фен",
    //     ],
    //     images: ["", ""], // Пример ссылок на изображения
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Песочный"
    // const apartment4 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Песочный",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Кофемашина",
    //       "Утюг",
    //       "Фен",
    //     ],
    //     images: ["", ""], // Пример ссылок на изображения
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Мятный"
    // const apartment5 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Мятный",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Панорамные окна",
    //       "Микроволновая печь",
    //       "Кофемашина",
    //       "Две полутораспальные кровати",
    //     ],
    //     images: ["", ""], // Пример ссылок на изображения
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });
    // // Создаем апартамент "Гостевой дом Ореховый"
    // const apartment1 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Ореховый",
    //     capacity: 8,

    //     link: "",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Сауна",
    //       "Кондиционер",
    //       "Кофемашина",
    //       "Микроволновая печь",
    //       "Фен",
    //     ],

    //     images: ["", ""], // Пример ссылок на изображения
    //     location: {
    //       connect: { id: 2 }, // Предполагаем, что "Москва" имеет id = 1
    //     },
    //   },
    // });

    // const apartment6 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Алтайский",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Панорамные окна",
    //       "Веранда",
    //       "Кофемашина",
    //       "Вид на лес",
    //       "Мангал",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Лавандовый"
    // const apartment7 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Лавандовый",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кофемашина",
    //       "Микроволновая печь",
    //       "Утюг",
    //       "Фен",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Изумрудный"
    // const apartment8 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Изумрудный",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Вид на лес",
    //       "Терраса",
    //       "Кофемашина",
    //       "Можно с питомцами",
    //       "Фен",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Озерный"
    // const apartment9 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Озерный",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Вид на озеро",
    //       "Панорамные окна",
    //       "Кофемашина",
    //       "Веранда",
    //       "Фен",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Черемуховый"
    // const apartment10 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Черемуховый",
    //     capacity: 6,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Теплый пол",
    //       "Духовка",
    //       "Кофемашина",
    //       "Вид на сад",
    //       "Ортопедический матрас",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Оливковый"
    // const apartment11 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Оливковый",
    //     capacity: 7,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Проектор",
    //       "Телевизор со Smart TV",
    //       "Кофемашина",
    //       "Утюг",
    //       "Фен",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Березовый"
    // const apartment12 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Березовый",
    //     capacity: 7,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Вид на лес",
    //       "Кондиционер",
    //       "Посудомоечная машина",
    //       "Можно с питомцами",
    //       "Кофемашина",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Хвойный"
    // const apartment13 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Хвойный",
    //     capacity: 5,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Умная колонка",
    //       "Кофемашина",
    //       "Микроволновая печь",
    //       "Духовка",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Рябиновый"
    // const apartment14 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Рябиновый",
    //     capacity: 5,

    //     link: "Смотреть фотогалерею",
    //     rooms: 2,
    //     area: 70,
    //     features: [
    //       "Можно с питомцами",
    //       "Умная колонка",
    //       "Кофемашина",
    //       "Посудомоечная машина",
    //       "Банные принадлежности",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Пшеничный"
    // const apartment15 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Пшеничный",
    //     capacity: 5,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Умная колонка",
    //       "Кофемашина",
    //       "Посудомоечная машина",
    //       "Фен",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Соломенный"
    // const apartment16 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Соломенный",
    //     capacity: 8,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Кофеварка",
    //       "Wi-Fi",
    //       "Панорамные окна",
    //       "Посудомоечная машина",
    //       "Принадлежности для барбекю",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Луговой"
    // const apartment17 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Луговой",
    //     capacity: 6,

    //     link: "Номер распродан на 17 ноября — 21 ноября. Выберите свободные даты в календаре ниже.",
    //     rooms: 2,
    //     area: 65,
    //     features: [
    //       "Можно с питомцами",
    //       "Wi-Fi",
    //       "Кондиционер",
    //       "Две полутораспальные кровати",
    //       "Двуспальная кровать",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Кедровый"
    // const apartment18 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Кедровый",
    //     capacity: 7,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 90,
    //     features: [
    //       "Вид на лес",
    //       "Кофемашина",
    //       "Можно с питомцами",
    //       "Кондиционер",
    //       "Фен",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });

    // // Создаем апартамент "Гостевой дом Медовый"
    // const apartment19 = await prisma.apartment.create({
    //   data: {
    //     name: "Гостевой дом Медовый",
    //     capacity: 5,

    //     link: "Смотреть фотогалерею",
    //     rooms: 3,
    //     area: 70,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Умная колонка",
    //       "Кофемашина",
    //       "Вид на лес",
    //       "Можно с питомцами",
    //     ],
    //     images: ["", ""],
    //     location: {
    //       connect: { id: 2 },
    //     },
    //   },
    // });
    // // Студия Moonlight на ВДНХ
    // await prisma.apartment.create({
    //   data: {
    //     name: "Студия Moonlight на ВДНХ",
    //     capacity: 4,
    //     area: 23,
    //     rooms: 1,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Утюг",
    //       "Фен",
    //       "Wi-Fi",
    //     ],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Студия Minto Chokoreto
    // await prisma.apartment.create({
    //   data: {
    //     name: "Студия Minto Chokoreto",
    //     capacity: 4,
    //     area: 23,
    //     rooms: 1,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Утюг",
    //       "Фен",
    //       "Электронные замки",
    //     ],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Студия White&Black
    // await prisma.apartment.create({
    //   data: {
    //     name: "Студия White&Black",
    //     capacity: 3,
    //     area: 18,
    //     rooms: 1,
    //     features: ["Телевизор", "Кондиционер", "Утюг", "Фен", "Wi-Fi"],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Студия Spring Dawn на ВДНХ
    // await prisma.apartment.create({
    //   data: {
    //     name: "Студия Spring Dawn на ВДНХ",
    //     capacity: 4,
    //     area: 23,
    //     rooms: 1,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Кофемашина",
    //       "Утюг",
    //       "Wi-Fi",
    //     ],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Лофт Green Garden на ВДНХ
    // await prisma.apartment.create({
    //   data: {
    //     name: "Лофт Green Garden на ВДНХ",
    //     capacity: 4,
    //     area: 23,
    //     rooms: 1,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Утюг",
    //       "Фен",
    //       "Wi-Fi",
    //     ],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Студия Black Pearl на ВДНХ
    // await prisma.apartment.create({
    //   data: {
    //     name: "Студия Black Pearl на ВДНХ",
    //     capacity: 4,
    //     area: 23,
    //     rooms: 1,
    //     features: [
    //       "Телевизор со Smart TV",
    //       "Кондиционер",
    //       "Фен",
    //       "Утюг",
    //       "Wi-Fi",
    //     ],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Студия Aquamarine
    // await prisma.apartment.create({
    //   data: {
    //     name: "Студия Aquamarine",
    //     capacity: 4,
    //     area: 14,
    //     rooms: 1,
    //     features: [
    //       "Wi-Fi",
    //       "Двуспальная кровать",
    //       "Фен",
    //       "Душ",
    //       "Телевизор со Smart TV",
    //     ],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    // // Апартаменты Botanica
    // await prisma.apartment.create({
    //   data: {
    //     name: "Апартаменты Botanica",
    //     capacity: 4,
    //     area: 33,
    //     rooms: 1,
    //     features: ["Телевизор", "Кондиционер", "Утюг", "Фен", "Wi-Fi"],
    //     location: {
    //       connect: { id: 1 },
    //     },
    //   },
    // });

    console.log("Создан апартамент:", apartment2);
  } catch (error) {
    console.error("Ошибка при создании апартамента:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createApartment();
