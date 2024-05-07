"use client";

import { Google } from "grommet-icons";

import CustomButton from "@/components/Basics/CustomButton";

export default function NavbarMenuGoogleLoginButton() {
  return (
    <CustomButton className="flex items-center justify-center gap-2">
      Sign in with Google <Google size="20" color="plain" />
    </CustomButton>
  );
}
