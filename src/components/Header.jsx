import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThreeAnimation from "./ThreeAnimation";

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="header__text">
        <div className="header__textLeft">
          <h1 className="header__name">
            <Typewriter
              words={[
                "Hello, I am Firdausy!",
                "Welcome to my portfolio!",
                "Let’s build something great!",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          {/* <Typing speed={200}>
            <Typing.Delay ms={2000} />
            <h1> Firdausy Bashir,</h1>
            <Typing.Delay ms={1000} />
            <h1 className="header__name">Front-end Developer</h1>
          </Typing> */}
          <p className="header__description">
            I'm a Nigerian based Front-End & ReactJS Developer/Freelancer.
          </p>
          <Link to={"/portfolio"} className="header__button">
            View my Works
          </Link>
        </div>
        <ThreeAnimation />
        <div className="header__socials">
          {/* <TwitterIcon /> */}
          <a href="https://www.linkedin.com/in/firdausy-bashir-1820a5b5">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Firdausi1">
            <GitHubIcon />
          </a>
        </div>
      </div>
      {/* 
			<div className="header__horizontal"></div>
			<div className="header__vertical"></div> */}
    </div>
  );
};

export default Header;
