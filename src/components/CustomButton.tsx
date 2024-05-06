import { twMerge } from "tailwind-merge";

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function CustomButton({
  children = "Login",
  className,
  ...props
}: ICustomButtonProps) {
  return (
    <button
      className={twMerge(
        `flex w-full scale-100 items-center justify-center rounded-full bg-black py-2 text-white transition-transform duration-200 ease-in-out hover:scale-95`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
