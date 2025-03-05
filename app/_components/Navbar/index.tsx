import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { navLinks } from "./constants";
import LinkButton from "../LinkButton";
import Input from "../Input";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav
        data-testid="desktop-navbar"
        className="fixed hidden w-full p-4 lg:flex lg:justify-between"
      >
        {/* Left Section: Title & Navigation Links */}
        <div className="flex items-center space-x-4 grow font-semibold">
          <Link href="/" className="text-primary-500">
            Aeon Bank Assessment
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary-500 hover:text-primary-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Search Bar & Login Button */}
        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="Search..." />
          <LinkButton href="/login">Login</LinkButton>
        </div>
      </nav>

      <MobileNavbar />
    </>
  );
}
