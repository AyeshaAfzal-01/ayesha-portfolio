import React, { useContext, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import assets from "../assets/assets";
import { HiMenu } from "react-icons/hi";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showHamburgerItems, setShowHamburgerItems] = useState(false);
  const { darkMode } = useContext(ShopContext);
  console.log(darkMode);
  useEffect(() => {}, [darkMode]);
  return (
    <nav>
      <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-6 md:px-12 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div
          className={`text-gray-800 font-bold font-display italic tracking-wider text-lg cursor-pointer dark:text-gray-200`}
        >
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
              className="hover:text-gray-800 hover:dark:text-gray-300"
            >
              ABOUT
            </a>
               
            <a
              href="#work"
              className="hover:text-gray-800 hover:dark:text-gray-300"
            >
              WORK
            </a>
        
            <a
              href="#contact"
              className="hover:text-gray-800 hover:dark:text-gray-300"
            >
              CONTACT
            </a>
          </ul>

          <ThemeToggle />

          {/* Mobile Hamburger */}
          <HiMenu
            className="w-6 h-6 cursor-pointer text-black dark:text-white md:hidden"
            onClick={() => setShowHamburgerItems(!showHamburgerItems)}
          />
        </div>
      </div>
<div className="h-8"></div>

      {showHamburgerItems && (
        <div className="md:hidden px-6 py-6 h-screen  mt-12">
          <ul className="flex flex-col justify-center items-center gap-4 text-gray-400 font-semibold">
            <a
              href="#work"
              className="hover:text-gray-800 hover:dark:text-gray-300"
            >
              WORK
            </a>
            <a
             href="#about"
              className="hover:text-gray-800 hover:dark:text-gray-300"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="hover:text-gray-800 hover:dark:text-gray-300"
            >
              CONTACT
            </a>
          </ul>
        </div>
      )}\
    </nav>
  );
};

export default Navbar;
