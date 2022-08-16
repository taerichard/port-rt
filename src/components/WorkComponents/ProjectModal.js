import React from "react";
import "./styles/projectModalStyles.css";
// import ReactDom from "react-dom";

const ProjectModal = ({ onClose, open }) => {
  if (!open) return null;
  return (
    <div className="projectModal-container">
      <div className="projectModal-col-1">
        <button className="projectModal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;

// <>
//   <div style={MODAL_CONTAINER}>
//     <div style={OVERLAY_STYLES}></div>
//     <div style={MODAL_STYLES}></div>
//     <button style={BUTTON_STYLE} onClick={props.onClose}>
//       close modal
//     </button>
//   </div>
// </>

{
}
