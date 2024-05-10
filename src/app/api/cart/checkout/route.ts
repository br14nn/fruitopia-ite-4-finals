import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/prisma/db";
import { createClient } from "@/utils/supabase/server";

export async function DELETE(req: NextRequest) {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw Error();

    const res = await prisma.cart.deleteMany({
      where: {
        userId: user.id,
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
