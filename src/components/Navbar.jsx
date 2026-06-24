import React from 'react'
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center px-12 py-2'>
        <div className='text-pink-500 font-bold font-display text-2xl cursor-pointer hover:text-pink-400'>ayesha.</div>
        <div className='flex gap-4 items-center'>
        <ul className='font-body text-gray-400 text-sm tracking-wider font-semibold cursor-pointer flex gap-6'>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <ThemeToggle />
        </div>
        </div>
        <hr className='text-gray-300' />
    </nav>
  )
}

export default Navbar