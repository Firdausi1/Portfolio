import React, { useState, useEffect } from "react";
import "./About.css";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

const About = () => {
	const [slide, setSlide] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.onscroll = () => {
				let currentScrollPos = window.pageYOffset;
				let maxScroll = document.body.scrollHeight - window.innerHeight;
				// console.log(maxScroll)
				if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
					setSlide(true);
					// console.log(currentScrollPos)
				} else {
					setSlide(false);
				}
			};
		}
	}, []);
	return (
		<section id="about" className="about">
			<div className="about__container">
				<div className="about__description">
					<h2>ABOUT ME</h2>
					<p>
						Born in 1997, I’m a web-developer based in Nigeria. Graduated with a
						Computer Science degree from Northwest University, Kano. I have rich
						experience in development of responsive web applications
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
				{slide ? (
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
						<h3>FIREBASE</h3>
						<div className="about__skillContainer">
							<div className=" skill about__skill5"></div>
						</div>
					</div>
				) : (
					" "
				)}
			</div>
		</section>
	);
};

export default About;
