"use client";

import { useRouter } from "next/navigation";
import { m, domAnimation, LazyMotion } from "framer-motion";

import CustomButton from "@/components/CustomButton";

import { createClient } from "@/utils/supabase/client";
import { revalidateAllPaths } from "@/utils/actions/actions";

export default function NavbarMenuLogoutButton() {
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) throw Error();

      await revalidateAllPaths();
    } catch (error) {
      alert("Failed to sign out");
      await revalidateAllPaths();
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <CustomButton
          className="bg-red-500 font-bold text-white"
          onClick={handleClick}
        >
          Logout
        </CustomButton>
      </m.div>
    </LazyMotion>
  );
}
