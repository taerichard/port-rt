import React from "react";
import "./styles/footerStyle.css";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <span className="footer-left__name">Richard Tae</span>
        <span className="footer-left__role">UI Developer</span>
      </div>
      <div className="footer-middle">
        <ul className="footer-middle__socialMedia">
          <li className="footer-middle__socialMedia__fb">
            <a target="_blank" href="https://facebook.com">
              Facebook.
            </a>
          </li>
          <li className="footer-middle__socialMedia__instagram">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/richard-tae-bb4ba215a/"
            >
              LinkedIn.
            </a>
          </li>
          <li className="footer-middle__socialMedia__github">
            <a target="_blank" href="https://github.com/taerichard">
              Github.
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <span>Richard Tae's Portfolio</span>
        <span>2022 © Edition</span>
      </div>
    </div>
  );
};

export default Footer;
