import React, { useState } from "react";
import "../styles/accordion.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title-container">
          <h4>{title}</h4>
        </div>
        <div className="accordion-button-container">
          <span>{isActive ? "-" : "+"}</span>
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
