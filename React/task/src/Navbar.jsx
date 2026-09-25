import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
   <div id='navbar'>
     <h2 id='icon'>React <span>Learn</span></h2>
    <div id='navright'>
      <Link className='nav' to='/'>Home</Link>
      <Link className='nav' to='/basics'>Basics</Link>
      <Link className='nav' to='/concepts'>Concepts</Link>
      <Link className='nav' to='/learningPath'>Learning Path</Link>
    </div>
   </div>
    
    </>
  )
}

export default Navbar