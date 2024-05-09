import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

const playfair_Display = Playfair_Display({ subsets: ["latin"] });

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
      <body
        id="body"
        className={`${playfair_Display.className} min-h-150 w-full overflow-x-hidden bg-zinc-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
