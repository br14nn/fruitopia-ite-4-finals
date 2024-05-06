import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import {
  NavbarMenuLink,
  Navbar,
  NavbarMenu,
  NavbarLink,
  NavbarLogo,
  NavbarItemsDesktop,
} from "@/components/Navbar/index";
import LogoutButton from "@/components/LogoutButton";
import LoginGoogleButton from "@/components/LoginGoogleButton";
import LoginGithubButton from "@/components/LoginGithubButton";

import { createClient } from "@/utils/supabase/server";

import navbarLogo from "@/assets/images/navbar-logo.png";

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
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={roboto_slab.className}>
        <Navbar>
          <NavbarLogo>
            <Image src={navbarLogo} width={109} height={25} alt="Navbar logo" />
          </NavbarLogo>
          <NavbarItemsDesktop>
            <NavbarLink>Home</NavbarLink>
            <NavbarLink>Favorites</NavbarLink>
            <NavbarLink>About</NavbarLink>
          </NavbarItemsDesktop>
          <NavbarMenu>
            {user && (
              <div className="flex w-full flex-col items-center gap-2 px-4">
                <Image
                  className="outline-off box-content aspect-square w-24 rounded-full border-4 border-secondary-color object-cover"
                  src={user.user_metadata.picture}
                  width={256}
                  height={256}
                  alt="Profile Picture"
                />
                <p className="text-center text-dark-color">
                  <span className="font-medium">Welcome, </span>
                  <br />
                  <span className="text-accent-color">
                    {user.user_metadata.full_name}
                  </span>
                </p>
              </div>
            )}
            {user && (
              <NavbarMenuLink className="hidden p-4 text-center hover:pr-4 md:block">
                My Basket
              </NavbarMenuLink>
            )}
            <div className="flex w-full flex-col items-center md:hidden">
              {user && <NavbarMenuLink>My Basket</NavbarMenuLink>}
              <NavbarMenuLink>Home</NavbarMenuLink>
              <NavbarMenuLink>Favorites</NavbarMenuLink>
              <NavbarMenuLink>About</NavbarMenuLink>
            </div>
            <div
              className={`${user ? "mt-auto" : "mt-0"} flex w-full flex-col items-center justify-center gap-2 px-4`}
            >
              {user ? (
                <LogoutButton />
              ) : (
                <>
                  <LoginGoogleButton />
                  <LoginGithubButton />
                </>
              )}
            </div>
          </NavbarMenu>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
