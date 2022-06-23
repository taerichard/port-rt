import React from "react";
import "../styles/headerStyles.css";
import Content from "./Content";

{
  /* <div className="header__currentRole">
<a>UI Developer</a>
</div>
<div className="header__location">
<p>
  Based in Seattle <br /> Washington
</p>
</div>
<div className="header-nav">
<ul className="header-nav__items">
  <li className="header-nav__item">Work</li>
  <li className="header-nav__item">About</li>
  <li className="header-nav__item">Contact</li>
</ul>
</div> */
}

const Header = () => {
  return (
    <div>
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
