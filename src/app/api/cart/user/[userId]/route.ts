import prisma from "@/utils/prisma/db";

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } },
) {
  try {
    const res = await prisma.cart.findMany({
      include: {
        fruit: true,
      },
      where: {
        userId: params.userId,
      },
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json({ res: res });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get cart data" },
      { status: 400 },
    );
  }
}
