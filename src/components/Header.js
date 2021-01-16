import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Typing from "react-typing-animation";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
	return (
		<div id="home" className="header">
			<div className="header__text">
				<div className="header__textLeft">
					<Typing speed={200}>
						<Typing.Delay ms={2000} />
						<h1> Firdausy Bashir,</h1>
						<Typing.Delay ms={1000} />
						<h1 className="header__name">Front-end Developer</h1>
					</Typing>
					<p className="header__description">
						I'm a Nigerian based Front-End & ReactJS Developer/Freelancer.
					</p>
					<button className="header__button">View Works</button>
				</div>
				<div className="header__socials">
					<TwitterIcon />
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
