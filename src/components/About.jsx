import React, { useState, useEffect } from "react";
import "./About.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import PageTransition from "./PageTransition";

const About = () => {
  return (
    <PageTransition up>
      <section id="about" className="about">
        <div className="about__container">
          <div className="about__description">
            <h2>ABOUT ME</h2>
            <p>
              Born in 1997, I’m a web-developer based in Nigeria. Graduated with
              a Computer Science degree from Northwest University, Kano. I have
              rich experience in development of responsive web applications
            </p>
            <div className="about__contact">
              <h5>
                <PhoneIcon />
                <span>08142138269</span>
              </h5>
              <h5>
                <EmailIcon />
                <span>firdausib18@gmail.com</span>
              </h5>

              <h5>
                <LocationOnIcon />
                <span>Abuja, Nigeria</span>
              </h5>
            </div>
            <div className="about__button">
              <Link
                to="/FIRDAUSY BASHIR CV2 - BTDT (1).pdf"
                target="_blank"
                download
                className="btn-primary"
              >
                Download CV
              </Link>
            </div>
          </div>
          <div className="about__skills">
            <h2>SKILLS</h2>
            <h3>HTML</h3>
            <div className="about__skillContainer">
              <div className=" skill about__skill1"></div>
            </div>
            <h3>CSS</h3>
            <div className="about__skillContainer">
              <div className=" skill about__skill2"></div>
            </div>
            <h3>JAVASCRIPT</h3>
            <div className="about__skillContainer">
              <div className=" skill about__skill3"></div>
            </div>
            <h3>REACTJS</h3>
            <div className="about__skillContainer">
              <div className=" skill about__skill4"></div>
            </div>
            <h3>Typescript</h3>
            <div className="about__skillContainer">
              <div className=" skill about__skill5"></div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
