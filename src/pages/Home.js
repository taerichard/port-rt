import React from "react";
import Header from "../components/HomeComponents/Header";
import Content from "../components/HomeComponents/Content";
import SecondContent from "../components/HomeComponents/SecondContent";
import Footer from "../components/HomeComponents/Footer";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Content />
      <SecondContent />
      <Footer />
    </div>
  );
};

export default Home;
