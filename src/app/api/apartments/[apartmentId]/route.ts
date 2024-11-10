import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { apartmentId: string } }
) {
  const { apartmentId } = params;

  try {
    const apartment = await prisma.apartment.findUnique({
      where: { id: parseInt(apartmentId) },
      include: {
        location: true,
      },
    });

    if (!apartment) {
      return NextResponse.json(
        { error: "Apartment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(apartment);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
