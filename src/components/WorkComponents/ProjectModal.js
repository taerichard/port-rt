import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
};

const BUTTON_STYLE = {
  zIndex: 2000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",

  zIndex: 1000,
};

const ProjectModal = (props) => {
  if (!props.open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}></div>
      <button style={BUTTON_STYLE} onClick={props.onClose}>
        close modal
      </button>
    </>
  );
};

export default ProjectModal;
