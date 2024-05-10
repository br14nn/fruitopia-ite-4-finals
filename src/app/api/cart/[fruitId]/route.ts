import prisma from "@/utils/prisma/db";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { fruitId: string } },
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  await prisma.cart.deleteMany({
    where: {
      AND: [
        {
          userId: user?.id,
        },
        {
          fruitId: parseInt(params.fruitId),
        },
      ],
    },
  });

  return NextResponse.json({ message: "Delete a cart item" });
}
