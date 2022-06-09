import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <span>
        <i>Mr.</i> <i>Majedul</i>
      </span>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <a href="images/Majedul Islam Resume.pdf" download className="nav-link">
          Download Resume
        </a>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
