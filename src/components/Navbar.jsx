import React, { useContext, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showHamburgerItems, setShowHamburgerItems] = useState(false);
  const { darkMode } = useContext(ShopContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowHamburgerItems(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setShowHamburgerItems(false);
  };

  return (
    <nav>
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-6 md:px-12 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        {/* Logo */}
        <div className="text-gray-800 font-bold font-display italic tracking-wider text-lg cursor-pointer dark:text-gray-200">
          <a href="/">
            <span className="text-primary-border-light">A</span>
            <span>yesha Afzal</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex font-body text-gray-500 dark:text-gray-400 text-xs tracking-wider cursor-pointer gap-6">
            <a
              href="#about"
              className="hover:text-gray-800 hover:dark:text-gray-300 transition"
            >
              ABOUT
            </a>

            <a
              href="#work"
              className="hover:text-gray-800 hover:dark:text-gray-300 transition"
            >
              WORK
            </a>

            <a
              href="#contact"
              className="hover:text-gray-800 hover:dark:text-gray-300 transition"
            >
              CONTACT
            </a>
          </ul>

          <ThemeToggle />

          {/* Mobile Menu Icon */}
          {showHamburgerItems ? (
            <HiX
              className="w-7 h-7 cursor-pointer text-black dark:text-white md:hidden z-[60]"
              onClick={() => setShowHamburgerItems(false)}
            />
          ) : (
            <HiMenu
              className="w-7 h-7 cursor-pointer text-black dark:text-white md:hidden"
              onClick={() => setShowHamburgerItems(true)}
            />
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Mobile Menu */}
      {showHamburgerItems && (
        <div className="fixed top-12 left-0 w-full h-[calc(100vh-50px)] bg-white dark:bg-black z-40 md:hidden flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8 text-lg font-semibold text-gray-500 dark:text-gray-400">
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-gray-800 hover:dark:text-gray-300 transition"
            >
              ABOUT
            </a>

            <a
              href="#work"
              onClick={closeMenu}
              className="hover:text-gray-800 hover:dark:text-gray-300 transition"
            >
              WORK
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-gray-800 hover:dark:text-gray-300 transition"
            >
              CONTACT
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;