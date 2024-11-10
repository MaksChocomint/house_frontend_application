import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, capacity, link, rooms, area, features, images, locationId } =
    await request.json();

  try {
    const apartment = await prisma.apartment.create({
      data: {
        name,
        capacity,
        features,
        link,
        rooms,
        area,
        images,
        location: {
          connect: { id: locationId },
        },
      },
    });

    return NextResponse.json(apartment, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
