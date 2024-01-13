import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1.5625rem;
  background-color: var(--green);
  display: flex;
  align-items: center;
  justify-content: space-between;

  // @media screen and (min-width: 768px) {
  //   margin-top: 1.5rem;
  //   height: 2.75rem;
  // }
  // @media screen and (min-width: 1280px) {
  //   height: 3rem;
  //   margin-top: 1.25rem;
  // }
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--white);
`;
