import React, { useState, useEffect } from "react";
import "./Modal.css";
const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <a href="#" className="close modal-close"  onClick={closeModal}></a>
        {children}
      </div>
    </article>
  );
};

export default Modal;
