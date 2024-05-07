"use client";

import { Github } from "grommet-icons";

import CustomButton from "@/components/Basics/CustomButton";

export default function NavbarMenuGithubLoginButton() {
  return (
    <CustomButton className="flex items-center justify-center gap-2">
      Sign in with Github <Github size="24" color="plain" />
    </CustomButton>
  );
}
