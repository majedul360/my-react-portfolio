import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectsCard.scss";
const ProjectsCard = ({ data }) => {
  const { id, img, name, desc } = data;
  const navigate = useNavigate();
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <p>{desc}</p>
        <button onClick={() => navigate(`/details/${id}`)}>see details</button>
      </div>
    </div>
  );
};

export default ProjectsCard;
