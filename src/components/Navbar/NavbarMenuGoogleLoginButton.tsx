"use client";

import { useRouter } from "next/navigation";
import { Google } from "grommet-icons";
import { LazyMotion, domAnimation, m } from "framer-motion";

import CustomButton from "@/components/CustomButton";

import { createClient } from "@/utils/supabase/client";
import { revalidateAllPaths } from "@/utils/actions/actions";

export default function NavbarMenuGoogleLoginButton() {
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const supabase = createClient();
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/callback`,
        },
      });
      await revalidateAllPaths();
    } catch (error) {
      alert("Failed to sign in with Google");
      await revalidateAllPaths();
      router.push("/");
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
          className="flex items-center justify-center gap-2"
          onClick={handleClick}
        >
          Sign in with Google <Google size="20" color="plain" />
        </CustomButton>
      </m.div>
    </LazyMotion>
  );
}
