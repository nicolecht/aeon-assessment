export default function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`p-2 border rounded-lg w-full outline-none border-neutral-300 focus:border-neutral-500 ${className}`}
      {...props}
    />
  );
}
