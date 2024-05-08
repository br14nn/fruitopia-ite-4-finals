"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { LuShoppingBasket } from "react-icons/lu";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

import NavbarMenuButton from "./NavbarMenuButton";

interface INavbarMenuProps {
  children?: React.ReactNode;
  user: any;
}

export default function NavbarMenu({ children, user }: INavbarMenuProps) {
  const navBarMenuRef = useRef() as any;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowMenu((oldVal) => !oldVal);
  };

  useEffect(() => {
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
    <div className="flex items-center gap-4">
      {user && (
        <Link className="hidden lg:block" href="/basket">
          <IconContext.Provider value={{ color: "#FFFFFF", size: "24" }}>
            <LuShoppingBasket />
          </IconContext.Provider>
        </Link>
      )}
      <div className="flex items-center" ref={navBarMenuRef}>
        <NavbarMenuButton onClick={handleClick} />

        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {showMenu && (
              <m.div
                initial={{
                  scaleY: 0,
                  translateY: "100%",
                  transformOrigin: "top",
                  bottom: "-16px",
                  right: 0,
                }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                className={`absolute flex w-full flex-col gap-4 rounded-3xl border-2 border-white bg-white/20 p-4 backdrop-blur-lg lg:max-w-80`}
              >
                {children}
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
}
