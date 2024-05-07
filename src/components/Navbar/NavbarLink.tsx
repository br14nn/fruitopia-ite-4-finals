import Link from "next/link";

interface INavbarLinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function NavbarLink({ children, href }: INavbarLinkProps) {
  return (
    <Link className="text-white" href={href}>
      {children}
    </Link>
  );
}
