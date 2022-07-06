import React from "react";
import "./styles/main.css";

const Form = () => {
  return (
    <div className="container">
      <div className="content-email">
        <p>
          Contact me at
          <br />
        </p>
        <spann>taerichard@gmail.com</spann>
      </div>
      <div className="socialMedia">
        <ul className="socialMedia-lists">
          <li className="socialMedia-lists_item">
            <a target="_blank" href="https://facebook.com">
              Facebook.
            </a>
          </li>
          <li className="socialMedia-lists_item">
            <a target="_blank" href="https://instagram.com">
              Instagram.
            </a>
          </li>
          <li className="socialMedia-lists_item">
            <a target="_blank" href="https://github.com">
              Github.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
