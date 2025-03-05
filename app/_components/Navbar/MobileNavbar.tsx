"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./constants";
import LinkButton from "../LinkButton";
import Input from "../Input";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSearchBarOpen(false);
  };

  const toggleSearchBar = () => {
    setIsSearchBarOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  const closeMenuAndSearchBar = () => {
    setIsMenuOpen(false);
    setIsSearchBarOpen(false);
  };

  return (
    <nav className="fixed w-full lg:hidden">
      {/* Navbar Header */}
      <div className="flex justify-between p-4">
        <Link
          href="/"
          className="text-primary-500 font-semibold"
          onClick={closeMenuAndSearchBar}
        >
          Aeon Bank Assessment
        </Link>

        {/* Search & Menu Buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearchBar}>
            <Image
              src="/icons/magnifying-glass-solid.svg"
              alt="Toggle search"
              width={16}
              height={16}
            />
          </button>

          <button onClick={toggleMenu}>
            <Image
              src={isMenuOpen ? "/icons/xmark-solid.svg" : "/icons/bars-solid.svg"}
              alt="Toggle navigation menu"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-500 bg-primary-100 px-4 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-between py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-secondary-500 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <LinkButton href="/login" onClick={closeMenuAndSearchBar}>
            Login
          </LinkButton>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div
        className={`transition-all duration-300 px-4 overflow-hidden ${
          isSearchBarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Input
          type="search"
          placeholder="Search..."
          className="border-x-0 border-t-0 rounded-none"
        />
      </div>
    </nav>
  );
}
