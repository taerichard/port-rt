import React, { useState } from "react";
import "../styles/secondContentStyles.css";
import Image from "./Image";
import iosImage from "../../images/SecondContent/ios.jpg";
import ptImage from "../../images/SecondContent/pt.jpg";
import yelpImage from "../../images/SecondContent/yelpApp.jpg";
import worldImage from "../../images/SecondContent/world.jpg";
import Modal from "./Modal";

const SecondContent = () => {
  // modal
  const [show, setShow] = useState(false);

  const displayModal = () => {
    setShow(true);
  };

  return (
    <div className="container">
      <section className="profile">
        <h4 className="profile-container">
          <span className="profile-container__title">
            <span className="profile-container__text">0</span>
            <span className="profile-container__text">0</span>
            <span className="profile-container__text">/</span>
          </span>
        </h4>

        <div className="profile-about">
          <span className="profile-about__intro">
            CREATING A RICH USER EXPERIENCE THROUGH USER CENTRIC DESIGN IS MY
            PASSION. I PLAN, DESIGN, AND DEVELOP WITH MODERN TECHNOLOGY,
            CREATING A MOMENT TO ENJOY.
          </span>
        </div>
        <div className="profile-button">
          <span className="profile-button__text">More?</span>
        </div>
      </section>
      <section className="projects-container">
        <h4 className="project-number">
          <span className="project-title">
            <span className="project-title__text">0</span>
            <span className="project-title__text">1</span>
            <span className="project-title__text">/</span>
          </span>
        </h4>
        <h4 className="project-title">
          <span className="project-intro">
            <span className="project-intro-text">PROJECTS</span>
          </span>
        </h4>
      </section>

      <section className="project-images">
        {/* {imageList} */}
        <div className="image">
          <span className="circle">
            <h3 className="image-text" onClick={displayModal}>
              More
            </h3>
          </span>
          <img className="" src={worldImage} />
        </div>
        {/* <div className="modal-container">
          <Modal
            open={show}
            title="Title here"
            info="info here"
            role="role here"
          />
        </div> */}
      </section>

      <section className="about">
        <h4 className="about-number">
          <span className="about-title__text">002/</span>
        </h4>
        <h4 className="about-title">
          <span className="about-intro-text">ABOUT</span>
        </h4>
        <div className="about-points">
          <span className="about-content__point">HANGING WITH MY DOG.</span>
          <br />
          <span className="about-content__point">PHYSICAL FITNESS.</span>
          <br />
          <span className="about-content__point">EATING JUNK FOOD.</span>
          <br />
          <span className="about-content__point">YOUTUBE MIDDLE BUTTON.</span>
          <br />
          <span className="about-content__point">
            EXPERIENCING NEW CULTURES.
          </span>
          <br />
          <span className="about-content__point">SKIPPING ROCKS.</span>
        </div>
        <div className="about-content__point">
          <span>
            During my free time, I enjoy a good o'l session of physical fitness.
            I also train people proper body mechanics through sports specific,
            strength, and mobility/stability training. I'm either on the
            computer or running around somewhere.
          </span>
        </div>
      </section>
    </div>
  );
};

export default SecondContent;
