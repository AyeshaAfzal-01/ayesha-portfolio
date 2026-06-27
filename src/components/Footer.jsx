import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-28 py-6 px-6 md:px-16 font-body border-t border-gray-300 dark:border-gray-800">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <div className="text-gray-800 font-bold font-display italic tracking-wider text-lg cursor-pointer dark:text-gray-200">
          <a href="/">
            <span className="text-primary-border-light">A</span>
            <span>yesha Afzal</span>
          </a>
        </div>

        <p className="text-gray-400 font-medium tracking-wider text-sm">
          &copy; {new Date().getFullYear()} Ayesha Afzal. All rights reserved.
        </p>
      </div>

      <div className="flex justify-center md:justify-end items-center">
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 font-body text-gray-500 dark:text-gray-400 text-xs tracking-wider">
          <a
            href="#about"
            className="hover:text-gray-800 dark:hover:text-gray-300"
          >
            ABOUT
          </a>

          <a
            href="#work"
            className="hover:text-gray-800 dark:hover:text-gray-300"
          >
            WORK
          </a>

          <a
            href="#contact"
            className="hover:text-gray-800 dark:hover:text-gray-300"
          >
            CONTACT
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;