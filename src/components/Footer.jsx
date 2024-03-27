import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row justify-content-between">
      <h6 className="mx-3">Copyright &#169; {currentYear} - CometOwl</h6>
    </footer>
  );
}

export default Footer;
