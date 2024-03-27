import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Glossary from "./Glossary";
import Articles from "./Articles";

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/Home">
            <img src="/assets/logo/logoCometOwl.png" alt="Comet Owl Logo" />
          </Link>
          <div>
            <Link to="/Home">
              <h6>Home</h6>
            </Link>
            <Link to="/Articles">
              <h6>Articles</h6>
            </Link>
            <Link to="/Glossary">
              <h6>Glossary</h6>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ChiSiamo" element={<Articles />} />
          <Route path="/Contatti" element={<Glossary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
