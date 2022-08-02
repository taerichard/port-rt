import React from "react";
import "../styles/modal.css";

const Modal = ({ open, title, info, role }) => {
  const styles = {
    openModal: {
      visibility: "visible",
      display: "flex",
    },

    closeModal: {
      visibility: "hidden",
    },
  };

  if (!open) {
    return null;
  }
  console.log("opened");
  return (
    // <div className={open ? styles.openModal : styles.closeModal}>

    <div className="modal">
      <div className="modal-title">{title}</div>
      <div className="modal-info">{info}</div>
      <div className="modal-role">{role}</div>
      <div className="modal-image">Image here</div>
    </div>
  );
};

export default Modal;
