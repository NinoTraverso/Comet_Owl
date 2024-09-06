import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div id="appContainer">
      {/* Global SEO metadata using Helmet */}
      <Helmet>
        <title>CometOwl</title>
        <meta name="description" content="Astronomy website" />
        <meta
          name="keywords"
          content="astronomy, cometowl, CometOwl, space, cosmology, science, astrophysics, articles, exoplanets, planetary sciences, Astronomy Website"
        />
      </Helmet>

      <Navbar />
      <Analytics />
      <SpeedInsights />
      <Footer />
    </div>
  );
}

export default App;
