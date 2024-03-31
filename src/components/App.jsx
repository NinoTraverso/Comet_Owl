import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Analytics from "./Analytics";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div id="appContainer">
      <Navbar />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
