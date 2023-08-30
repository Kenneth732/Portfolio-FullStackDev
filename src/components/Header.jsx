

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS or use styled-components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App-Header">
      <header className="navbar">
        <Link to="/" className="logo">
          CodeWise
        </Link>
        <nav className="nav-linkx">
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </header>


    </div>
  );
};

export default Header;


