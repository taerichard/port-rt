import React from "react";
import Header from "../components/HomeComponents/Header";
import HomeIntro from "../components/HomeComponents/HomeIntro";
import IntroContent from "../components/HomeComponents/IntroContent";
import ProjectContent from "../components/HomeComponents/ProjectContent";
import AboutContent from "../components/HomeComponents/AboutContent";
import ContactContent from "../components/HomeComponents/ContactContent";

const Home = () => {
  return (
    <div>
      <HomeIntro />
      <IntroContent />
      <ProjectContent />
      <AboutContent />
      <ContactContent />
    </div>
  );
};

export default Home;
