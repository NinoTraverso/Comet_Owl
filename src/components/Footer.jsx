import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
        <div
          id="footerLogo"
          className="d-flex flex-column justify-content-center align-items-center py-3"
        >
          <img src="./assets/logo/logoAndName.png" alt="cometowl logo" />

          <h4 className="mx-3">Copyright &#169; {currentYear} - CometOwl</h4>
        </div>
        <div className="d-flex flex-column text-center align-items-center my-4">
          <h3 className="bg-dark bg-rounded w-100">Contact form</h3>
          <input
            type="text"
            placeholder="Name"
            className="text-light bg-dark my-1"
          />
          <input
            type="email"
            placeholder="Email"
            className=" text-light bg-dark my-1"
          />
          <input
            type="text"
            placeholder="Message"
            className=" text-light bg-dark my-1"
          />
          <button className="text-light bg-dark border border-none my-1 px-4">
            Sendq
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
