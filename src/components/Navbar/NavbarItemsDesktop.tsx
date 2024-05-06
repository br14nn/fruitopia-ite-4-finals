import React from "react";
import { twMerge } from "tailwind-merge";

interface INavbarItemsDesktopProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function NavbarItemsDesktop({
  children,
  className,
  ...props
}: INavbarItemsDesktopProps) {
  return (
    <div
      className={twMerge(
        `hidden h-full flex-grow flex-row items-center justify-center md:flex`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
