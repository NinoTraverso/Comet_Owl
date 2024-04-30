import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div
        id="footerLogo"
        className="d-flex flex-column justify-content-center align-items-center py-3"
      >
        <img src="./assets/logo/logoAndName.png" alt="cometowl logo" />

        <h4 className="mx-3">Copyright &#169; {currentYear} - CometOwl</h4>
      </div>
    </footer>
  );
}

export default Footer;
