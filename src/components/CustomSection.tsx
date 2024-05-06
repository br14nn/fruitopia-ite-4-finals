import { twMerge } from "tailwind-merge";

interface ICustomSectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function CustomSection({
  children,
  className,
  ...props
}: ICustomSectionProps) {
  return (
    <section
      className={twMerge("h-fit min-h-[600px] w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
}
