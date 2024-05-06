import { twMerge } from "tailwind-merge";

interface INavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function NavbarLogo({
  children,
  className,
  ...props
}: INavbarLogoProps) {
  return (
    <div
      className={twMerge(
        `md:max-w-50 flex h-full w-full items-center justify-start`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
