import React from "react";
import Header from "../../shared/header/Header";
import Banner from "./banner/Banner";
import "./Home.scss";
import Projects from "./projects/Projects";
const Home = () => {
  return (
    <div className="home">
      <Header className="header" />
      <div className="sections">
        <Banner />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
