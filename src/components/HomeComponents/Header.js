import React from "react";
import "../styles/headerStyles.css";
import Content from "./Content";
import { Link } from "react-router-dom";

const largeHeader = (
  <div className="large-header">
    <div className="header-name">
      <a>Richard Tae</a>
    </div>
    <div className="header-role">
      <a>UI Developer</a>
    </div>
    <div className="header-location">
      <p>Seattle, Washington</p>
    </div>
    <div className="header-nav">
      <ul className="header-nav__items">
        <a href="/">
          <Link className="header-nav__item" to="work">
            Work
          </Link>
        </a>
        <Link className="header-nav__item" to="about">
          About
        </Link>
        <Link className="header-nav__item" to="contact">
          Contact
        </Link>
      </ul>
    </div>
  </div>
);

const Header = () => {
  return (
    <div>
      {largeHeader}
      <div className="header">
        <div className="header_logo">
          <a href="index.html" className="header__name">
            Richard Tae
          </a>
        </div>
        <div className="header_menu">
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
