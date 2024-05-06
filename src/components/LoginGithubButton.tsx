"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { Github } from "grommet-icons";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";

import { createClient } from "@/utils/supabase/client";
import { revalidateAllPaths } from "@/utils/actions/actions";

interface ILoginGithubButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function LoginGithubButton({
  children,
  className,
  ...props
}: ILoginGithubButtonProps) {
  const router = useRouter();

  const [githubColor, setGithubColor] = useState<"plain" | "#FFFFFF">("plain");

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
      await revalidateAllPaths();
    } catch (error) {
      alert("Failed to login!");
      router.refresh();
    }
  };

  const handleMouseOver = () => {
    setGithubColor("#FFFFFF");
  };
  const handleMouseOut = () => {
    setGithubColor("plain");
  };

  return (
    <CustomButton
      className={twMerge(
        "border-2 border-black bg-transparent drop-shadow transition-all hover:bg-black",
        className,
      )}
      {...props}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {!children ? (
        <Github
          className="transition-colors duration-200"
          color={githubColor}
        />
      ) : (
        "Login with Github"
      )}
    </CustomButton>
  );
}
