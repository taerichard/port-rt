import React, { useState } from "react";
import "./styles/form.css";

//https://www.youtube.com/watch?v=NgWGllOjkbs&ab_channel=RemyFamily

const Form = () => {
  return (
    <div className="container">
      <div className="contact-info">
        <h4>email</h4>
        <a className="contact-info__email">
          <span>
            tae
            <br className="break" />
            richard@
            <br className="break-1" />
            gmail.com
          </span>
        </a>
      </div>
      <div className="socials">
        <h4 className="socials-title">social accounts</h4>
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
