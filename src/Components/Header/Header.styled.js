import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  padding: 1.5625rem;
  background-color: var(--green);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--white);
`;

export const MenuContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;

    @media (max-width: 768px) {
      display: flex;
  }
`;
