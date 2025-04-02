import React, { useEffect } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Nav />
        <AnimatePresence>
          <Routes>
            <Route path="/" exact element={<Header />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/portfolio" exact element={<Portfolio />} />

            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
