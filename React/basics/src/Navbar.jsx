import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>NavBar</h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="./about">About</Link>
        <Link to="./contact">Contact</Link>
      </div>
    </>
  );
};
export default Navbar;
