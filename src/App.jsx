import React, { useEffect } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Header />} />

          {/* <Route path="/about" exact>
						<About />
					</Route> */}
          <Route path="/about" exact element={<About />} />
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
