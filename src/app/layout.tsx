import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

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
      <body className={roboto_slab.className}>{children}</body>
    </html>
  );
}
