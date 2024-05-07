import { twMerge } from "tailwind-merge";

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function CustomButton({
  children,
  className,
  ...props
}: ICustomButtonProps) {
  return (
    <button
      className={twMerge(
        `white hover:scale-102 w-full rounded-full bg-white py-2 text-black transition-all duration-150 ease-in-out`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
