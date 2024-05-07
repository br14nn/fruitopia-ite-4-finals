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
        `white w-full rounded-full bg-white py-2 text-black transition-all duration-150 ease-in-out hover:scale-105`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
