import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex py-4 shadow-md">
        <div className="logo mr-6 uppercase">tools-manufacturing</div>
        <div className="nav-items">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
