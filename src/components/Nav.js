import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nav() {
  const [navLinks, setNavLinks] = useState(false);

  const displayNavLinks = () => {
    setNavLinks(!navLinks);
  };

  return (
    <div className="nav">
      <div className="nav__left">
        <CodeIcon />
      </div>
      {navLinks ? (
        <ul className="nav__links nav__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          {/* <li><NavLink to="/about">About</NavLink></li> */}
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      ) : (
        " "
      )}

      <div className="nav__right" onClick={displayNavLinks}>
        {navLinks ? <CloseIcon className="close" /> : <MenuIcon />}
      </div>
    </div>
  );
}

export default Nav;
