import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Glossary from "./Glossary";
import Articles from "./Articles";
import Contact from "./Contact";

function Navbar() {
  return (
    <div className="mb-5">
      <BrowserRouter>
        <nav className="d-none d-xl-flex flex-row jusify-content-start align-items-center fixed-top ">
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
        <nav
          id="collapseNavbar"
          className=" navbar navbar-dark d-flex d-xl-none"
        >
          <div className="container-fluid d-flex flex-column flex-md-row justify-content-between">
            <div id="NavLogoContainer">
              <Link to="/Home">
                <img src="/assets/logo/logoAndName.png" alt="Comet Owl Logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler align-self-end align-self-md-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <h4 className="mx-3">Home</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/articles">
                    <h4 className="mx-3">Articles</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/glossary">
                    <h4 className="mx-3">Glossary</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <h4 className="mx-3">Contact</h4>
                  </Link>
                </li>
              </ul>
            </div>
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
