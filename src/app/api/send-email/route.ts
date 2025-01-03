import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    // Настраиваем транспортер nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Хост SMTP-сервера
      port: parseInt(process.env.SMTP_PORT || "587"), // Порт SMTP-сервера
      secure: process.env.SMTP_SECURE === "true", // Используется ли SSL
      auth: {
        user: process.env.SMTP_USER, // Пользователь SMTP
        pass: process.env.SMTP_PASS, // Пароль SMTP
      },
    });

    // Содержание письма
    const mailOptions = {
      from: process.env.SMTP_FROM, // Отправитель
      to: process.env.SMTP_TO, // Получатель (или список получателей)
      subject: "Новая заявка с сайта", // Тема письма
      text: `Имя: ${name}\nТелефон: ${phone}`, // Текстовое содержимое
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}