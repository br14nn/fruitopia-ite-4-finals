"use client";

import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";

interface INavbarMenuButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavbarMenuButtonProps({
  onClick,
}: INavbarMenuButtonProps) {
  return (
    <button onClick={onClick}>
      <IconContext.Provider value={{ color: "#FFFFFF", size: "24" }}>
        <LuMenu className="scale-x-113" />
      </IconContext.Provider>
    </button>
  );
}
