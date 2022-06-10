import React from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ResumeBtn.scss";
const ResumeBtn = () => {
  return (
    <a href="images/majedul-resume.pdf" className="btn" download>
      <FontAwesomeIcon icon={faDownload} />
      <span>Download resume</span>
    </a>
  );
};

export default ResumeBtn;
