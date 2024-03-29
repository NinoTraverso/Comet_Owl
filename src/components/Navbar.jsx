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
        <nav className="d-flex flex-row jusify-content-start align-items-center fixed-top">
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
            <Link to="/Contact">
              <h4 className="mx-3">Contact</h4>
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
