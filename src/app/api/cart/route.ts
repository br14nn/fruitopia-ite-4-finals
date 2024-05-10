import { NextResponse, type NextRequest } from "next/server";

import prisma from "@/utils/prisma/db";
import { createClient } from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const res = await prisma.cart.findMany({
    include: {
      fruit: true,
    },
    where: {
      userId: user?.id,
    },
  });

  return NextResponse.json(res);
}

export async function POST(req: NextRequest) {
  const reqBody = (await req.json()) as { fruitId: number };
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw Error();

    const res = await prisma.cart.findFirst({
      where: {
        AND: [
          {
            userId: user.id,
          },
          {
            fruitId: reqBody.fruitId,
          },
        ],
      },
    });

    if (!res) {
      await prisma.cart.create({
        data: {
          userId: user.id,
          quantity: 1,
          fruitId: reqBody.fruitId,
        },
      });
    } else {
      await prisma.cart.updateMany({
        data: {
          quantity: {
            increment: 1,
          },
        },
        where: {
          AND: [
            {
              userId: user.id,
            },
            {
              fruitId: reqBody.fruitId,
            },
          ],
        },
      });
    }

    return NextResponse.json(
      { message: "Added to cart successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add to the cart" },
      { status: 400 },
    );
  }
}
