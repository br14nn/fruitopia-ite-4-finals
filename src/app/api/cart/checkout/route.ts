import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/prisma/db";

export async function DELETE(req: NextRequest) {
  try {
    const reqJson = (await req.json()) as { userId: string };
    const res = await prisma.cart.deleteMany({
      where: {
        userId: reqJson.userId,
      },
    });
    return NextResponse.json(
      {
        count: res.count,
        message: "Successfully deleted data in Cart table",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete datain Cart table" });
  }
}
