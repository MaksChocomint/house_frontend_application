import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { locationId: string } }
) {
  const { locationId } = params;

  try {
    const apartments = await prisma.apartment.findMany({
      where: { locationId: parseInt(locationId) },
      include: {
        location: true,
      },
    });

    return NextResponse.json(apartments);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
