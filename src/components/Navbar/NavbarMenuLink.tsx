import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface INavbarMenuLinkProps
  extends React.LinkHTMLAttributes<HTMLLinkElement> {
  children?: React.ReactNode;
}

export default function NavbarMenuLink({
  children,
  className,
  href = "#",
  ...props
}: INavbarMenuLinkProps) {
  return (
    <Link
      className={twMerge(
        "w-full px-4 py-1 text-end text-md font-medium transition-all duration-300 hover:bg-secondary-color hover:pr-8 hover:text-white",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
