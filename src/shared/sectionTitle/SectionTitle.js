import React from "react";
import "./SectionTitle.scss";
const SectionTitle = ({ children }) => {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      <div class="title-divider">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SectionTitle;
