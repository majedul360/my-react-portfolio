import React, { useEffect, useState } from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import Header from "../../../shared/header/Header";

const Details = () => {
  const { id } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const projectDetails = data?.find((d) => d.id == id);
        setProject(projectDetails);
      })
      .catch((e) => console.log(e?.message));
  }, [id]);

  return (
    <>
      <Header />
      <div className="details">
        <div className="image-container">
          <img src={project?.img} alt="" />
          <img src={project?.img2} alt="" />
          <img src={project?.img3} alt="" />
        </div>
        <h3 className="name">{project?.name}:</h3>
        <div className="features">
          <h3>features:</h3>
          <ul>
            {project?.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="technology">
          <span className="title">technology used:</span>
          {project?.technology.map((tech, index) => (
            <span key={index}>
              {tech}
              {project?.technology.length - index !== 1 ? "," : "."}
            </span>
          ))}
        </div>
        <div className="link">
          <span>live site:</span>
          <a href={project?.liveLink} target="_blank">
            {project?.liveLink}
          </a>
        </div>
        <div className="link">
          <span>github repo client site:</span>
          <a href={project?.clientLink} target="_blank">
            {project?.clientLink}
          </a>
        </div>
        <div className="link">
          {project?.serverLink && <span>github repo server site:</span>}
          <a href={project?.serverLink} target="_blank">
            {project?.serverLink}{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
