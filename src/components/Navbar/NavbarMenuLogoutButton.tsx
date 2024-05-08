"use client";

import { m, domAnimation, LazyMotion } from "framer-motion";

import CustomButton from "@/components/CustomButton";

interface INavbarMenuLogoutButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavbarMenuLogoutButton({
  onClick,
}: INavbarMenuLogoutButtonProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <CustomButton
          className="bg-red-500 font-bold text-white"
          onClick={onClick}
        >
          Logout
        </CustomButton>
      </m.div>
    </LazyMotion>
  );
}
