import React from "react";
import CustomLink from "../../CustomLink";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <span>
        <i>Mr.</i> <i>Majedul</i>
      </span>
      <nav>
        <CustomLink className="nav-link" to="/">
          Home
        </CustomLink>
        <CustomLink className="nav-link" to="/contact">
          Contact
        </CustomLink>
        <CustomLink className="nav-link" to="/blogs">
          Blogs
        </CustomLink>
      </nav>
    </div>
  );
};

export default Header;
