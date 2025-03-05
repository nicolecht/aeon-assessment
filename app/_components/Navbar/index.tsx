import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { navLinks } from "./constants";
import LinkButton from "../LinkButton";
import Input from "../Input";

export default function Navbar() {
  return (
    <>
      <nav
        data-testid="desktop-navbar"
        className="fixed hidden w-full p-4 lg:flex lg:justify-between"
      >
        <div className="flex items-center space-x-4 font-semibold grow">
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

        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="Search..." />
          <LinkButton href="/login">Login</LinkButton>
        </div>
      </nav>

      <MobileNavbar />
    </>
  );
}
