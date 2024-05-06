"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { Google } from "grommet-icons";

import CustomButton from "@/components/CustomButton";

import { createClient } from "@/utils/supabase/client";
import { revalidateAllPaths } from "@/utils/actions/actions";

interface ILoginGoogleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function LoginGoogleButton({
  children,
  className,
  ...props
}: ILoginGoogleButtonProps) {
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
      alert("Failed to login!");
      router.refresh();
    }
  };

  return (
    <CustomButton
      className={twMerge(
        "border-2 border-black bg-transparent transition-all hover:bg-black",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {!children ? <Google color="plain" /> : "Login with Google"}
    </CustomButton>
  );
}
