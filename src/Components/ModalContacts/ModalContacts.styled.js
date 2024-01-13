import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 500px;
  z-index: 1;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--black);
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    color: #ff0000;
  }
`;
