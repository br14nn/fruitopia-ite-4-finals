import { twMerge } from "tailwind-merge";

interface INavbarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function Navbar({
  children,
  className,
  ...props
}: INavbarProps) {
  return (
    <nav
      className={twMerge(
        "h-17 fixed z-[999] w-full bg-white/90 drop-shadow-lg backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-full w-full max-w-[1536px] flex-row items-center justify-between px-4">
        {children}
      </div>
    </nav>
  );
}
