import Link from "next/link";

export default function LinkButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={`p-3 font-semibold text-center text-white rounded-full min-w-32 bg-primary-500 hover:bg-primary-600 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
