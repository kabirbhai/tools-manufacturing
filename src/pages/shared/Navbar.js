import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between  py-4 shadow-md items-center ">
        <div className="flex items-end">
          <div className="logo mr-6 uppercase">
            <Link className="text-2xl" to="/">
              tools-MF
            </Link>
          </div>
          <div className="nav-items">
            <ul className="flex space-x-4">
              <li>
                <Link to="/home"> HOME</Link>
              </li>
              <li>
                <Link to="/about"> ABOUT</Link>
              </li>
              <li>
                <Link to="/blog"> BLOG</Link>
              </li>
              <li>
                <Link to="/contact"> CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-x-2">
          <Button variant="contained">Login</Button>
          <Button variant="outlined">signup</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
