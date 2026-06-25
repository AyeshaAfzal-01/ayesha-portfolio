import React, { useContext, useEffect, useState } from 'react'
import ThemeToggle from "./ThemeToggle";
import assets from "../assets/assets";
import { HiMenu } from "react-icons/hi";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [showHamburgerItems, setShowHamburgerItems] = useState(false)
  const {darkMode} = useContext(ShopContext)
console.log(darkMode)
useEffect(() => {

}, [darkMode])
  return (
    <nav>
      <div className='flex justify-between items-center px-6 md:px-12 py-4 w-screen'>
        
        <div className={`text-gray-800 font-bold font-display italic tracking-wider text-lg cursor-pointer dark:text-gray-200`}>
          <span className='text-pink-500'>A</span><span>yesha Afzal</span>
        </div>

        <div className='flex items-center gap-4'>
          
          {/* Desktop Menu */}
          <ul className='hidden md:flex font-body text-gray-500 dark:text-gray-400 text-xs tracking-wider cursor-pointer gap-6'>
            <li className='hover:text-gray-800 hover:dark:text-gray-300'>WORK</li>
            <li className='hover:text-gray-800 hover:dark:text-gray-300'>ABOUT</li>
            <li className='hover:text-gray-800 hover:dark:text-gray-300'>CONTACT</li>
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
      <li className='hover:text-gray-800 hover:dark:text-gray-300'>WORK</li>
            <li className='hover:text-gray-800 hover:dark:text-gray-300'>ABOUT</li>
            <li className='hover:text-gray-800 hover:dark:text-gray-300'>CONTACT</li>
    </ul>
  </div>
)}
      <hr className='text-gray-200 dark:text-gray-800' />
    </nav>
  )
}

export default Navbar