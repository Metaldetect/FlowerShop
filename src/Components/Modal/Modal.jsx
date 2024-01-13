import React, { useEffect } from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./Modal.styled";
import Form from "../Form/Form";

function Modal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Form visible={true} onClose={onClose} />
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
