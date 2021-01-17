import React, { useEffect } from "react";
import "./App.css";
import $ from "jquery";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<div className="app">
				<Nav />
				<Switch>
					<Route path="/" exact>
						<Header />
						<About/>
						<Portfolio/>
						<Contact/>
					</Route>
					{/* <Route path="/about" exact>
						<About />
					</Route> */}
					<Route path="/portfolio" exact>
						<Portfolio />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
					{/* <Experience /> */}
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
