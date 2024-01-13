import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  color: var(--white);
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  color: var(--white);
  background: var(--green);
  border: none;
`;
