import React, { useEffect, useState } from "react";
import "./Nav.css";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

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
					<li>Home</li>
					<li>About</li>
					<li>Portfolio</li>
					<li>Contact</li>
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
