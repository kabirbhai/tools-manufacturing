import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex py-4 shadow-md items-center">
        <div className="logo mr-6 uppercase">
          <Link className="text-2xl" to="/">
            tools-MF
          </Link>
        </div>
        <div className="nav-items">
          <ul className="flex space-x-4">
            <li>
              <Link to="/home"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/blog"> Blog</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
