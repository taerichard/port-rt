import React from "react";
import "./styles/contactContentStyles.css";

const ContactContent = () => {
  return (
    <div className="contactContent-container">
      <div className="contactContent-title">
        <h3>04/</h3>
        <h4>
          contact <br />
          me
        </h4>
      </div>
      <div className="contactContent-title-2">
        <h4>Design & Development</h4>
      </div>

      <div className="contactContent-title-3">
        <h4>
          ui <br />
          developer
        </h4>
      </div>
      <div className="contactContent-contact">
        <a target="_blank" href="mailto:taerichard@gmail.com">
          <span className="contactContent-email">
            tae
            <br className="break" />
            richard@
            <br className="break-1" />
            gmail.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactContent;
