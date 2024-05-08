import Link from "next/link";

interface INavbarLinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function NavbarLink({ children, href }: INavbarLinkProps) {
  return (
    <Link className="group relative text-white" href={href}>
      {children}
      <hr className="absolute w-full origin-left scale-x-0 border border-yellow-500 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
    </Link>
  );
}
