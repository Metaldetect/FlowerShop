import styled from "styled-components";
import { Pagination } from "@mui/material";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 800px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h2`
  color: var(--black);
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #555;
  margin-bottom: 15px;
`;

export const Price = styled.b`
  color: var(--red);
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 30px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    color: #ff0000;
  }
`;

export const ItemContainer = styled.div`
  width: 700px;
  height: 500px;
  gap: 10px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  max-width: 700px;
  border-radius: 10px;
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .MuiPaginationItem-root {
    border-radius: 5px;
    margin: 0 5px;
  }

  .Mui-selected {
    background-color: #3498db;
    color: var(--white);
  }
`;
