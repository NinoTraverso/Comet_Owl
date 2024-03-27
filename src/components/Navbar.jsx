import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Glossary from "./Glossary";
import Articles from "./Articles";
import Contact from "./Contact";

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/Home" id="NavLogoContainer">
            <img src="/assets/logo/logoCometOwl.png" alt="Comet Owl Logo" />
          </Link>
          <div>
            <Link to="/Home" className="text-decoration-none">
              <h6 className="text-decoration-none">Home</h6>
            </Link>
            <Link to="/Articles">
              <h6>Articles</h6>
            </Link>
            <Link to="/Glossary">
              <h6>Glossary</h6>
            </Link>
            <Link to="/Contact">
              <h6>Contact</h6>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Glossary" element={<Glossary />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
