import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aeon Bank",
  description: "Assessment version of Aeon Bank's website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-display">{children}</body>
    </html>
  );
}
