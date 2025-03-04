import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { navLinks } from "./constants";
import LinkButton from "../LinkButton";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed hidden w-full p-4 lg:flex lg:justify-between">
        {/* Left Section: Title & Navigation Links */}
        <div className="flex items-center space-x-4 grow">
          <h6 className="text-primary-500">Aeon Bank Assessment</h6>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-secondary-500 hover:text-primary-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Search Bar & Login Button */}
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search..."
            className="p-2 border rounded-lg outline-none border-neutral-300 focus:border-neutral-500"
          />
          <LinkButton href="/login" label="Login" />
        </div>
      </nav>

      <MobileNavbar />
    </>
  );
}
