import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-37.5 bg-gray-800 text-white'>
      <a href='/' className='text-xl uppercase tracking-wider font-bold'>
        Logo
      </a>
      <ul className='flex gap-5'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/services'>Services</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/blog'>Blog</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
