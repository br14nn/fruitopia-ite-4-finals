"use client";

import { useEffect, useState } from "react";

import NavbarMenuButton from "./NavbarMenuButton";

interface INavbarMenuProps {
  children?: React.ReactNode;
}

export default function NavbarMenu({ children }: INavbarMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowMenu((oldVal) => !oldVal);

    if (showMenu) {
      document.getElementById("body")?.classList.add("overflow-y-auto");
    } else {
      document.getElementById("body")?.classList.remove("overflow-y-auto");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <NavbarMenuButton onClick={handleClick} />

      <button
        className={`${showMenu ? "block" : "hidden"} fixed inset-0 -m-4 h-screen w-screen cursor-default bg-transparent lg:-m-9`}
        onClick={handleClick}
      />

      <div
        className={`${showMenu ? "scale-y-100" : "scale-y-0"} fixed -bottom-4 left-0 flex w-full origin-top translate-y-full flex-col gap-4 rounded-3xl border-2 border-white bg-white/20 p-4 backdrop-blur-lg transition-all duration-200 ease-in-out`}
      >
        {children}
      </div>
    </>
  );
}
