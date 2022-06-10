import React from "react";
import Header from "../../shared/header/Header";
import About from "./about/About";
import Banner from "./banner/Banner";
import "./Home.scss";
import Projects from "./projects/Projects";
const Home = () => {
  return (
    <div className="home">
      <Header className="header" />
      <div className="sections">
        <Banner />
        <About className="about" />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
