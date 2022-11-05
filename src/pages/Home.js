import React from "react";
import Announcements from "../components/Announcements/Announcements";
import Header from "../components/Header/Header";
import SolutionWriting from "../components/SolutionWriting/SolutionWriting";
import Welcome from "../components/Welcome/Welcome";
import WorkAction from "../components/WorkAction/WorkAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Announcements />
      <WorkAction />
      <SolutionWriting />
    </div>
  );
};

export default Home;
