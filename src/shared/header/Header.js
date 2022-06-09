import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <span>Mr. Majedul</span>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <a href="images/Majedul Islam Resume.pdf" download className="nav-link">
          Download Resume
        </a>
      </nav>
    </div>
  );
};

export default Header;
