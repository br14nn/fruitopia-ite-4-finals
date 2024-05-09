import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/prisma/db";

export async function GET(req: NextRequest) {
  try {
    const res = await prisma.fruit.findMany({});
    return NextResponse.json(res);
  } catch (error) {
    throw Error("Failed to get fruits data");
  }
}
