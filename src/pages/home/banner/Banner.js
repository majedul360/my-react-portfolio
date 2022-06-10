import React, { useEffect, useRef } from "react";
import "./Banner.scss";
import { init } from "ityped";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="banner">
      <div className="icons">
        <a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          className="icon-container"
        >
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/?hl=en"
          target="_blank"
          className="icon-container"
        >
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a className="icon-container">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
      <div>
        <h1>I am Majedul Islam</h1>
        <h3>frontend developer</h3>
      </div>
    </div>
  );
};

export default Banner;
