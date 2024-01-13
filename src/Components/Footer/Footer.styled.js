import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 20px;
  margin-top: 120px;
  text-align: center;
  background-color: var(--green);
  color: var(--white);
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--white);
`;

export const PoweredByLink = styled.a`
  color: var(--white);
  font-weight: bold;
  margin-top: 5px;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--blueLink);
  }
`;

export const AdditionalLink = styled.a`
  color: var(--white);
  font-weight: bold;

  &:hover {
    color: var(--blueLink);
  }
`;

export const Comment = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
`;
