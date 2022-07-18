import React from "react";

const HobbyButton = ({ onClick, value, id }) => {
  console.log("hobbyButton", value);
  return (
    <button id={id} onClick={onClick} value={value}>
      {value}
    </button>
  );
};

export default HobbyButton;
