import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <h1>Navbar</h1>
    <div id='navbar'>
      <Link className='nav' to='/'>Home</Link>
      <Link className='nav' to='/about '>About</Link>
      <Link className='nav' to='/career'>Career</Link>
      <Link className='nav' to='/contact'>Contact</Link>
      <Link className='nav' to='/testimonial'>Testimonials</Link>
    </div>
    </>
  )
}

export default Navbar