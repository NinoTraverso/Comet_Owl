import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div id="appContainer">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
