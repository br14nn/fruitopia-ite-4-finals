import Link from "next/link";

interface INavbarMenuLinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function NavbarMenuLink({
  children,
  href,
}: INavbarMenuLinkProps) {
  return (
    <Link
      className="w-full rounded-full py-2 text-center text-white transition-colors hover:bg-yellow-500 hover:text-zinc-950"
      href={href}
    >
      {children}
    </Link>
  );
}
