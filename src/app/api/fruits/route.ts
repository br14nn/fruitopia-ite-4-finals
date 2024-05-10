import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/prisma/db";

export async function GET(req: NextRequest) {
  try {
    const res = await prisma.fruit.findMany({});
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get fruits data" },
      { status: 400 },
    );
  }
}
