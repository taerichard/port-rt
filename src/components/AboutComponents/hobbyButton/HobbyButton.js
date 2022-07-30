import React from "react";
import "../styles/hobbyButtonStyles.css";

const HobbyButton = ({ title, onClick, event }) => {
  console.log("button", event);
  return (
    <button className="hobbyButton" onClick={onClick}>
      {title}
    </button>
  );
};

export default HobbyButton;
