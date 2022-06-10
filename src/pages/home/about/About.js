import React from "react";
import ResumeBtn from "../../../shared/resumeBtn/ResumeBtn";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <SectionTitle>about me</SectionTitle>
      <div className="about-container">
        <img src="images/majedul.webp" alt="" />
        <div className="content">
          <h4>hi there</h4>
          <p>
            I am Majedul Islam. I am a front-end developer and active learner. I
            love coding. I design and develop dynamic, fully responsive websites
            by HTML, CSS, SASS, Bootstrap, Tailwind CSS, Javascript, React Js,
            MongoDb, Node Js, Express Js, and Firebase. I have designed and
            developed 10+ websites. Now I am confident in frontend development.
            I am ready to work in any environment and with responsibilities.
          </p>
          <ResumeBtn />
        </div>
      </div>
    </div>
  );
};

export default About;
