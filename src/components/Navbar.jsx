import React, { useState } from 'react'
import ThemeToggle from "./ThemeToggle";
import assets from "../assets/assets";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [showHamburgerItems, setShowHamburgerItems] = useState(false)

  return (
    <nav>
      <div className='flex justify-between items-center px-6 md:px-12 py-2 w-screen'>
        
        <div className='text-pink-500 font-bold font-display text-2xl cursor-pointer hover:text-pink-400'>
          ayesha.
        </div>

        <div className='flex items-center gap-4'>
          
          {/* Desktop Menu */}
          <ul className='hidden md:flex font-body text-gray-400 text-sm tracking-wider font-semibold gap-6'>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>

          <ThemeToggle />

          {/* Mobile Hamburger */}
         <HiMenu
  className="w-6 h-6 cursor-pointer text-black dark:text-white md:hidden"
  onClick={() => setShowHamburgerItems(!showHamburgerItems)}
/>
        </div>

      </div>

    {showHamburgerItems && (
  <div className="md:hidden px-6 py-6 h-screen  mt-12">
    <ul className="flex flex-col justify-center items-center gap-4 text-gray-400 font-semibold">
      <li>WORK</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </ul>
  </div>
)}
      <hr className='text-gray-300' />
    </nav>
  )
}

export default Navbar