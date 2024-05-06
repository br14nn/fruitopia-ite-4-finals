import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface INavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export default function NavbarLink({
  children = "Link",
  className,
  href = "#",
  ...props
}: INavbarLinkProps) {
  return (
    <Link
      className={twMerge(
        "flex h-full items-center px-8 text-dark-color transition-colors duration-200 hover:bg-dark-color/80 hover:text-white lg:px-16",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
