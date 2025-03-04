export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`block p-3 font-semibold text-center text-white rounded-full min-w-32 bg-primary-500 hover:bg-primary-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
