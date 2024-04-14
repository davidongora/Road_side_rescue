import React from 'react'
import logo from "../../src/Brand.png"

const Navbar = () => {
  return (
    <div className='flex'>
      <img src={ logo } alt="logo" />
      <nav className='flex ml-32 gap-8'>
        <span>Blog</span>
        <span>Contact</span>
        <span>Pictures and stories</span>
        <span>About Us</span>
        <span>Products</span>
        <span >Home</span>
        {/* icons */}
      </nav>
    </div>
  )
}

export default Navbar