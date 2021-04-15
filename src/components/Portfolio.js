/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Portfolio.css";
import FlipMove from "react-flip-move";

const Portfolio = () => {
	return (
		<div id="portfolio" className="portfolio">
			<div className="portfolio__body">
				<div className="portfolio__text">
					<h2>My Recent Work</h2>
					<p>
						Here are a few projects I've worked on recently. Want to see more?
						Email me.
					</p>
				</div>
				<div className="portfolio__container">
					<div className="portfolio__box">
						<a href="https://kind-wing-0dba35.netlify.app/">
							<img
								className="portfolio__image"
								src="../../Screenshot 2020-09-22 at 20.51.09.png"
							/>
							<div className="portfolio__hover">
								<h5>click to view</h5>
							</div>
						</a>
					</div>

					<div className="portfolio__box">
						<a href="https://restaurant-firdausy-bashir.netlify.app/">
							<img
								className="portfolio__image"
								src="../../Screenshot 2020-09-22 at 21.27.51.png"
							/>
							<div className="portfolio__hover">
								<h5>click to view</h5>
							</div>
						</a>
					</div>
					<div className="portfolio__box">
						<a href="https://nostalgic-pike-95271e.netlify.app/">
							<img
								className="portfolio__image"
								src="../../Screenshot 2020-09-22 at 21.30.29.png"
							/>
							<div className="portfolio__hover">
								<h5>click to view</h5>
							</div>
						</a>
					</div>
					<div className="portfolio__box">
						<a href="https://clone-a1611.web.app/">
							<img
								className="portfolio__image"
								src="../../Screenshot 2020-09-28 at 14.44.13.png"
							/>
							<div className="portfolio__hover">
								<h5>click to view</h5>
							</div>
						</a>
					</div>
					<div className="portfolio__box">
						<a href="https://soko-store-front.netlify.app/">
							<img
								className="portfolio__image"
								src="../../Screenshot 2021-04-15 at 21.48.02.png"
							/>
							<div className="portfolio__hover">
								<h5>click to view</h5>
							</div>
						</a>
					</div>
					<div className="portfolio__box">
						<a href="https://stupefied-mcnulty-629e7d.netlify.app/">
							<img
								className="portfolio__image"
								src="../../Screenshot 2021-01-15 at 18.51.28.png"
							/>
							<div className="portfolio__hover">
								<h5>click to view</h5>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
