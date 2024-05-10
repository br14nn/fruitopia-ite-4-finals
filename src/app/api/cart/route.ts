import { NextResponse, type NextRequest } from "next/server";

import prisma from "@/utils/prisma/db";

export async function DELETE(req: NextRequest) {
  try {
    const reqJson = (await req.json()) as { orderId: number };
    await prisma.cart.delete({
      where: {
        id: reqJson.orderId,
      },
    });
    return NextResponse.json({ message: "Delete a cart item" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete an order" });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const reqJson = (await req.json()) as { orderId: number; quantity: number };
    const res = await prisma.cart.update({
      data: {
        quantity: reqJson.quantity,
      },
      where: {
        id: reqJson.orderId,
      },
    });
    return NextResponse.json(
      {
        updatedData: res,
        message: "Successfully updated cart",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update cart" },
      { status: 400 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const reqJson = (await req.json()) as { userId: string; fruitId: number };
    const res = await prisma.cart.findFirst({
      where: {
        AND: [
          {
            userId: reqJson.userId,
          },
          {
            fruitId: reqJson.fruitId,
          },
        ],
      },
    });

    if (!res) {
      await prisma.cart.create({
        data: {
          userId: reqJson.userId,
          quantity: 1,
          fruitId: reqJson.fruitId,
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
              userId: reqJson.userId,
            },
            {
              fruitId: reqJson.fruitId,
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
