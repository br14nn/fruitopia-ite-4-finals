"use server";

import axios from "axios";

export const revalidate = 3600;
export default async function () {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/fruits`);

  return res.data;
}
