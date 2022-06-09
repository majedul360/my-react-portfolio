import React from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";
import groca from "../../../assets/groca.jpg";
import woodStore from "../../../assets/woodStore.jpg";
import robbins from "../../../assets/tonyRobbins.jpg";
const Projects = () => {
  return (
    <div className="projects">
      <SectionTitle>my projects</SectionTitle>
      <div className="projects-container">
        <ProjectsCard
          img={groca}
          name="groca ecommerce website"
          desc="Groca ecomerce fully responsive ecommerce website. Beautiful designed with smooth sliders. Users friendly and easy to customize also"
        />
        <ProjectsCard
          img={woodStore}
          name="woodStore ecommerce website"
          desc="woodStore fully responsive ecommerce website. Simple desined and clean coding. Users friendly and easy to customize also"
        />
        <ProjectsCard
          img={robbins}
          name="Tonny robins portfolio website"
          desc="Tonny robins fully responsive personal portfolio website. Simple designed and clean coding. Users friendly and easy to customize also"
        />
      </div>
    </div>
  );
};

export default Projects;
