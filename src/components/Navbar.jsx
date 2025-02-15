import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Glossary from "./Glossary";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage.jsx";
import Exoplanets from "./Exoplanets.jsx";
import More from "./More.jsx";
import Contact from "./Contact.jsx";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-5">
      <BrowserRouter>
        <nav
          className={`fixed-top transition-all ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          } d-flex flex-row justify-content-start align-items-center`}
          style={{ transition: "opacity 0.3s ease-in-out" }}
        >
          <div id="NavLogoContainer">
            <Link to="/Home">
              <img src="/assets/logo/logoAndName.png" alt="Comet Owl Logo" />
            </Link>
          </div>
          <div id="NavPageLinks" className="d-flex flex-row">
            <Link to="/Home">
              <h4 className="mx-3">Home</h4>
            </Link>
            <Link to="/Articles">
              <h4 className="mx-3">Articles</h4>
            </Link>
            <Link to="/Glossary">
              <h4 className="mx-3">Glossary</h4>
            </Link>
            <Link to="/Exoplanets">
              <h4 className="mx-3">Exoplanets</h4>
            </Link>
            <Link to="/More">
              <h4 className="mx-3">More</h4>
            </Link>
            <Link to="/Contact">
              <h4 className="mx-3">Contact</h4>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/articles/:title" element={<ArticlePage />} />
          <Route path="/Glossary" element={<Glossary />} />
          <Route path="/Exoplanets" element={<Exoplanets />} />
          <Route path="/More" element={<More />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
