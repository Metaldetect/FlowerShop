import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const BurgerMenuIcon = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: var(--green);
  z-index: 1000;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  animation: ${slideIn} 0.5s ease;
  overflow: hidden;

  @media (min-width: 769px) {
    display: none;
  }
`;
