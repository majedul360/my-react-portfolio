import React from "react";
import Header from "../../shared/header/Header";
import Banner from "./banner/Banner";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Header className="header" />
      <div className="sections">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
