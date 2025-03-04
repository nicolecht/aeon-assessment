import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
}

export default function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="p-3 font-semibold text-center text-white rounded-full min-w-32 bg-primary-500 hover:bg-primary-600"
    >
      {label}
    </Link>
  );
}
