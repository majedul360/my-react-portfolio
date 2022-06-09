import React from "react";
import "./ProjectsCard.scss";
const ProjectsCard = ({ img, name, desc }) => {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <p>{desc}</p>

        <button>see details</button>
      </div>
    </div>
  );
};

export default ProjectsCard;
