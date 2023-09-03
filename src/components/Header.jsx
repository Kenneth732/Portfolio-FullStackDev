import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import Profile from './assets/Kenne.jpg'

function Header() {
  return (
    <div className='containers'>
      <div className="navbar">

        <div className="navleft">
          <h2 className='logo'><i class="fa-brands fa-kickstarter"></i></h2>
          <div className="search">
            <input type="text" placeholder='search' />
          </div>
        </div>

        <div className="navmiddle">
        <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                My Network
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Job
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Messaging
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Notifications
              </Link>
            </li>
          </ul>
        </div>

        <div className="navright">
          <div className="online offline">
            <img src={Profile} alt="" className="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UserProfile from './assets/Kenne.jpg'
// import { faBars } from "@fortawesome/free-solid-svg-icons"; 

// const Header = () => {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <div className="App-Header">
//       <div className="navbar">
//         <div className="navbar-left">
//           <Link to="/" className="logo">
//             CodeWise
//           </Link>
//         </div>
//         <div className="navbar-middle">
//           <ul>
//             <li>
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 My Network
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 Job
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 Messaging
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">
//                 Notifications
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-right">
//           <img src={UserProfile} alt="" className="nav-img" />
//         </div>
        {/* <nav className="nav-linkx">
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
 
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav> */}
      {/* </div>


    </div>
  );
};

export default Header;

 */}
