import React, { useEffect } from "react";
import "./App.css";
import $ from "jquery";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />

          {/* <Route path="/about" exact>
						<About />
					</Route> */}
          <Route path="/portfolio" exact element={<Portfolio />} />

          <Route path="/contact" exact element={<Contact />} />

          {/* <Experience /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
