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
        `w-full rounded-full bg-white py-2 text-black`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
