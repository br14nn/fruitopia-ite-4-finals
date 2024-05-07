import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fruitopia",
  description: "Fruits store website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body" className={`${roboto_slab.className} bg-zinc-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
