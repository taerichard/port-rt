import React from "react";

const Image = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.src} height={props.height} width={props.width} />
    </div>
  );
};

export default Image;
