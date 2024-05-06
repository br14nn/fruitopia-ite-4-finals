import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ICustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export default function CustomLink({
  children,
  href = "#",
  className,
  ...props
}: ICustomLinkProps) {
  return (
    <Link
      className={twMerge(
        "w-full py-1 text-center text-md font-medium transition-colors duration-300 hover:bg-secondary-color",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
