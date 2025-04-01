import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="footer">
      <p>All right reserved Firdausy @ 2020</p>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/firdausy-bashir-1820a5b5">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Firdausi1">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
