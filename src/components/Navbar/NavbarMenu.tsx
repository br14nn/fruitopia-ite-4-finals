"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";

interface INavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function NavbarMenu({
  children,
  className,
  ...props
}: INavbarMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMenu((oldVal) => !oldVal);
  };

  return (
    <>
      <div
        className={twMerge(
          `${showMenu ? "translate-x-0" : "translate-x-full"}  fixed right-0 top-0 z-[10] h-[100svh] w-full max-w-[200px] overflow-y-auto bg-white transition-transform duration-300 sm:max-w-[300px]`,
          className,
        )}
        {...props}
      >
        <div className="flex h-full min-h-[600px] w-full flex-col items-center gap-6 py-8">
          {children}
        </div>
      </div>

      {showMenu && (
        <button
          className="fixed inset-0 z-[9] h-[100svh] w-full cursor-default bg-stone-800/10"
          onClick={handleClick}
        />
      )}

      <div className="md:max-w-50 flex h-full w-full items-center justify-end">
        <button className="h-9 w-9" onClick={handleClick}>
          <IconContext.Provider value={{ size: "36px", color: "#583296" }}>
            <LuMenu />
          </IconContext.Provider>
        </button>
      </div>
    </>
  );
}
