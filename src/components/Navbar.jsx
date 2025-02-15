import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Glossary from "./Glossary";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage.jsx";
import Exoplanets from "./Exoplanets.jsx";
import More from "./More.jsx";
import Contact from "./Contact.jsx";

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
        <nav
          id="collapseNavbar"
          className=" navbar navbar-dark d-flex d-xl-none"
        >
          <div className="container-fluid d-flex flex-column flex-md-row justify-content-between">
            <div id="NavLogoContainerSmall">
              <Link to="/Home">
                <img src="/assets/logo/logoAndName.png" alt="Comet Owl Logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler align-self-center align-self-md-center"
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
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <Link
                    className="nav-link mt-3"
                    to="/Home"
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show")
                    }
                  >
                    <h4 className="mx-3">Home</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Articles"
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show")
                    }
                  >
                    <h4 className="mx-3">Articles</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Glossary"
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show")
                    }
                  >
                    <h4 className="mx-3">Glossary</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Exoplanets"
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show")
                    }
                  >
                    <h4 className="mx-3">Exoplanets</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/More"
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show")
                    }
                  >
                    <h4 className="mx-3">More</h4>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Contact"
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show")
                    }
                  >
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
