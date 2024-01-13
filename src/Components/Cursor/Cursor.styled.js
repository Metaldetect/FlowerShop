import styled from "styled-components";

export const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 6;
  opacity: 0;
`;

export const CursorImage = styled.img`
  width: 40px;
  height: 40px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
`;
