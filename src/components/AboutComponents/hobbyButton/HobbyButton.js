import React from "react";

const HobbyButton = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default HobbyButton;
