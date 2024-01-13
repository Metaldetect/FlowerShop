import { styled } from "styled-components";

export const MainContainer = styled.div`
  background-image: url("/images/bg/bg.png");
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center center;
  position: relative;
`;
export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 700px;
  font-weight: 600;
  font-size: 64px;
  color: var(--white);
`;
