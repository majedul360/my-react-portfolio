import React, { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="projects">
      <SectionTitle>my projects</SectionTitle>
      <div className="projects-container">
        {data.map((d) => (
          <ProjectsCard key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
