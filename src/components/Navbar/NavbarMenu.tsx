"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { LuShoppingBasket } from "react-icons/lu";

import NavbarMenuButton from "./NavbarMenuButton";

interface INavbarMenuProps {
  children?: React.ReactNode;
}

export default function NavbarMenu({ children }: INavbarMenuProps) {
  const navBarMenuRef = useRef() as any;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    console.log("Hello World");

    const handleMouseDown = (e: any) => {
      if (!navBarMenuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  });

  return (
    <>
      <div className="flex items-center gap-4">
        <Link className="hidden lg:block" href="/basket">
          <IconContext.Provider value={{ color: "#FFFFFF", size: "24" }}>
            <LuShoppingBasket />
          </IconContext.Provider>
        </Link>
        <div className="flex items-center" ref={navBarMenuRef}>
          <NavbarMenuButton onClick={handleClick} />

          <div
            className={`${showMenu ? "scale-y-100" : "scale-y-0"} absolute -bottom-4 right-0 flex w-full origin-top translate-y-full flex-col gap-4 rounded-3xl border-2 border-white bg-white/20 p-4 backdrop-blur-lg transition-all duration-200 ease-in-out lg:max-w-80`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* <button
        className={`${showMenu ? "block" : "hidden"} absolute inset-0 -m-4 h-screen w-screen cursor-default bg-transparent lg:-m-9`}
        onClick={handleClick}
      /> */}
    </>
  );
}
