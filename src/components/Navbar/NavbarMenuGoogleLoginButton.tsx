"use client";

import { useRouter } from "next/navigation";
import { Google } from "grommet-icons";

import CustomButton from "@/components/Basics/CustomButton";

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
      revalidateAllPaths();
    } catch (error) {
      alert("Failed to sign in with Google");
      revalidateAllPaths();
      router.push("/");
    }
  };

  return (
    <CustomButton
      className="flex items-center justify-center gap-2"
      onClick={handleClick}
    >
      Sign in with Google <Google size="20" color="plain" />
    </CustomButton>
  );
}
