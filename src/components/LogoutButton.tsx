"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import CustomButton from "@/components/CustomButton";

import { logout } from "@/utils/actions/actions";

interface ILogoutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function LogoutButton({
  children = "Logout",
  className,
  ...props
}: ILogoutButtonProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await logout();
    } catch (error) {
      alert("Failed to logout");
      router.refresh();
    }
  };

  return (
    <CustomButton
      className={twMerge("bg-red-500 font-medium text-white", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </CustomButton>
  );
}
