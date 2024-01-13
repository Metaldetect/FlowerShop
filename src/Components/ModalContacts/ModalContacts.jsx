import React, { useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./ModalContacts.styled";
import ContactModalInfo from "../ContactModalInfo";

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
        <ContactModalInfo />
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
