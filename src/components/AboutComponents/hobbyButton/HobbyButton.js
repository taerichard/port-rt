import React from "react";
import "../styles/hobbyButtonStyles.css";

const HobbyButton = ({ title, onClick }) => {
  return (
    <button className="hobbyButton" onClick={onClick}>
      {title}
    </button>
  );
};

export default HobbyButton;
