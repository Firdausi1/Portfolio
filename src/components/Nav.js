import React from "react";
import "./Nav.css";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Nav() {
	return (
		<div className="nav">
			<div className="nav__left">
				<CodeIcon />
			</div>
			<div className="nav__right">
				<MenuIcon />
			</div>
		</div>
	);
}

export default Nav;
