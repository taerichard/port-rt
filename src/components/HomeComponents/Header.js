import React, { useState } from "react";
import "./styles/headerStyles.css";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "../HomeComponents/Sidebar/SidebarData";

const largeHeader = (
  <div className="large-header">
    <div className="header-name">
      <a href="/">Richard Tae</a>
    </div>
    <div className="header-role">
      <span>UI Developer</span>
    </div>
    <div className="header-location">
      <p>Seattle, Washington</p>
    </div>
    <div className="header-nav">
      {/* <ul className="header-nav__items"> */}
      <NavLink className="header-nav__item" to="work">
        Work.
      </NavLink>

      <NavLink className="header-nav__item" to="about">
        About.
      </NavLink>
      <NavLink className="header-nav__item" to="contact">
        Contact.
      </NavLink>
      {/* </ul> */}
    </div>
  </div>
);

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      {largeHeader}
      <div className="header">
        <div className="header_logo">
          <a href="/" className="header__name">
            Richard Tae
          </a>
        </div>
        <div className="header_menu">
          <Link className="header-menu__logo" to="#">
            <span onClick={showSideBar}>Menu</span>
          </Link>
        </div>
        <nav
          className={sidebar ? "sidebar-active" : "sidebar"}
          onClick={showSideBar}
        >
          <ul className="sidebar-list" onClick={showSideBar}>
            {SidebarData.map((item, index) => {
              return (
                <li className={item.cName} key={index}>
                  <Link to={item.link}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="sidebar-header__name">
            <p>Richard Tae</p>
          </div>
          <div className="sidebar-header__button">
            <a>Close</a>
          </div>
          <div className="sidebar-footer">
            <span>
              Richard Tae's Portfolio <br />
              2022 © Edition
            </span>
            <span></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
