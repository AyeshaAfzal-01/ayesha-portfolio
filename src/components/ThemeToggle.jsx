import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const {darkMode,setDarkMode} = useContext(ShopContext)

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-20 h-6 border border-gray-400 hover:border-primary-border-light font-body rounded-full px-2"
    >
      <div
        className={`w-3 h-3 px-1 rounded-full transition-all duration-300
        ${darkMode ? " bg-white" : "bg-black"}`}
      ></div>

    <span
  className={`w-full text-center text-xs font-medium hover:text-primary-border-light ${
    darkMode ? "text-white" : "text-gray-800"
  }`}
>
  {darkMode ? "LIGHT" : "DARK"}
</span>
    </button>
  );
};

export default ThemeToggle;