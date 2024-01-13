import styled from "styled-components";

export const CustomButton = styled.button`
  position: absolute;
  top: 80%;
  left: 5%;
  width: 350px;
  height: 70px;
  color: var(--white);
  background-color: var(--green);

  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
