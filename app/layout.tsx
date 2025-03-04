import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

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
      <body className="antialiased font-display">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
