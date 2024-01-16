import React, { useState } from "react";
import { MainContainer, Title } from "./Main.styled";
import Button from "../Button";
import Modal from "../Modal";

function Main() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <MainContainer>
      <Title>Швидка доставка почуттів</Title>
      <Button onClick={openModal} />
      {isModalOpen && <Modal onClose={closeModal} />}
    </MainContainer>
  );
}

export default Main;
