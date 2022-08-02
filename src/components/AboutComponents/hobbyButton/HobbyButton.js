import React from "react";
import "../styles/hobbyButtonStyles.css";

const HobbyButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="hobbyButton">
      {title}
    </button>
  );
};

export default HobbyButton;
