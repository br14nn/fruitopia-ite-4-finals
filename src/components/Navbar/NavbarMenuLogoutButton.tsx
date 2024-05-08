"use client";

import { useRouter } from "next/navigation";

import CustomButton from "@/components/Basics/CustomButton";

import { createClient } from "@/utils/supabase/client";
import { logout, revalidateAllPaths } from "@/utils/actions/actions";

export default function NavbarMenuLogoutButton() {
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await logout();
    } catch (error) {
      alert("Failed to sign out");
      revalidateAllPaths();
      router.push("/");
    }
  };

  return (
    <CustomButton
      className="bg-red-500 font-bold text-white"
      onClick={handleClick}
    >
      Logout
    </CustomButton>
  );
}
