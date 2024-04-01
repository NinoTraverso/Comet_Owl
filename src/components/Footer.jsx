import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <h6 className="mx-3">Copyright &#169; {currentYear} - CometOwl</h6>
    </footer>
  );
}

export default Footer;
