import React from "react";
import About from "../../../pages/About";

const AboutCard = () => {
  return (
    <>
      <figure class="snip1559">
        <div class="profile-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
            alt="profile-sample2"
          />
        </div>
        <figcaption>
          <h3>Sue Shei</h3>
          <h5>Founder</h5>
          <p>
            Which is worse, that everyone has his price, or that the price is
            always so low.
          </p>
          <div class="icons">
            <a href="#">
              <i class="ion-social-reddit"></i>
            </a>
            <a href="#">
              <i class="ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="ion-social-vimeo"></i>
            </a>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default AboutCard;
