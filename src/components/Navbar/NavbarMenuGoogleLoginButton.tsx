"use client";

import { Google } from "grommet-icons";
import { LazyMotion, domAnimation, m } from "framer-motion";

import CustomButton from "@/components/CustomButton";

interface INavbarMenuGoogleLoginButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavbarMenuGoogleLoginButton({
  onClick,
}: INavbarMenuGoogleLoginButtonProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <CustomButton
          className="flex items-center justify-center gap-2"
          onClick={onClick}
        >
          Sign in with Google <Google size="20" color="plain" />
        </CustomButton>
      </m.div>
    </LazyMotion>
  );
}
