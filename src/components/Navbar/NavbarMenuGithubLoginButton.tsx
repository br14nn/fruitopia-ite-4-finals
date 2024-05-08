"use client";

import { useRouter } from "next/navigation";
import { Github } from "grommet-icons";

import CustomButton from "@/components/Basics/CustomButton";

import { createClient } from "@/utils/supabase/client";
import { revalidateAllPaths } from "@/utils/actions/actions";

export default function NavbarMenuGithubLoginButton() {
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const supabase = createClient();
      await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/callback`,
        },
      });
      revalidateAllPaths();
    } catch (error) {
      alert("Failed to sign in with Github");
      revalidateAllPaths();
      router.push("/");
    }
  };

  return (
    <CustomButton
      className="flex items-center justify-center gap-2"
      onClick={handleClick}
    >
      Sign in with Github <Github size="24" color="plain" />
    </CustomButton>
  );
}
