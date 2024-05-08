"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import NavbarMenu from "./NavbarMenu";
import NavbarMenuProfile from "./NavbarMenuProfile";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarLink from "./NavbarLink";
import NavbarMenuGoogleLoginButton from "./NavbarMenuGoogleLoginButton";
import NavbarMenuLogoutButton from "./NavbarMenuLogoutButton";

import brandLogo from "@/assets/images/brand-logo.png";

import { createClient } from "@/utils/supabase/client";
import { revalidateAllPaths } from "@/utils/actions/actions";

export default function Navbar() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const handleLogout = async () => {
    await revalidateAllPaths();

    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      alert("Failed to logout user.");
    }
  };

  const handleGoogleLogin = async () => {
    await revalidateAllPaths();

    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/callback`,
        },
      });
    } catch (error) {
      alert("Failed to sign in with Google.");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        console.log(user);

        setUser(user);
      } catch (error) {
        alert("Something went wrong with Supabase Authenticatoin.");
      }
    };

    getUser();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ transformOrigin: "bottom center", translateY: "-100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        animate={{ translateY: "0" }}
        className="fixed left-0 right-0 z-[999] mx-auto w-full max-w-[2000px] px-4 pt-4 md:px-9 md:pt-9"
      >
        <nav className="flex w-full items-center justify-between rounded-full border-2 border-white bg-white/20 px-6 py-4 backdrop-blur-lg lg:px-9">
          <div className="flex flex-row items-center lg:gap-6">
            <Image className="w-24 lg:w-36" src={brandLogo} alt="Brand Logo" />
            <div className="hidden flex-row items-center gap-6 lg:flex">
              <NavbarLink href="#">Home</NavbarLink>
              <NavbarLink href="#">Fruits</NavbarLink>
              <NavbarLink href="#">About Us</NavbarLink>
            </div>
          </div>

          <NavbarMenu>
            {user && (
              <NavbarMenuProfile
                profilePhotoSrc={user.user_metadata.avatar_url}
                profileName={user.user_metadata.name}
              />
            )}
            <div className="flex w-full flex-col items-center border-y-2 border-white py-4 lg:hidden">
              {user && (
                <NavbarMenuLink href="/basket">View Basket</NavbarMenuLink>
              )}
              <NavbarMenuLink href="#">Home</NavbarMenuLink>
              <NavbarMenuLink href="#">Fruits</NavbarMenuLink>
              <NavbarMenuLink href="#">About Us</NavbarMenuLink>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              {!user ? (
                <NavbarMenuGoogleLoginButton onClick={handleGoogleLogin} />
              ) : (
                <NavbarMenuLogoutButton onClick={handleLogout} />
              )}
            </div>
          </NavbarMenu>
        </nav>
      </m.div>
    </LazyMotion>
  );
}
