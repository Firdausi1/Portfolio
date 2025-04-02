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
        <Link to={"/"}>
          <CodeIcon />
        </Link>
      </div>
      {navLinks ? (
        <ul className="nav__links nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>{" "}
          <li className="nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          {/* <li><NavLink to="/about">About</NavLink></li> */}
          <li className="nav__item">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav__item">
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
