import styled from 'styled-components';
import { Pagination } from '@mui/material';
import Icon from '../../images/svg/vector.svg';

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

export const ItemContainer = styled.div`
  padding: 15px;
  width: 350px;
  height: auto;
  gap: 10px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  box-shadow: var(--boxShadowDefault);
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: var(--boxShadowHover);
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 48px;
  font-weight: 600;
  margin-top: 120px;
  margin-left: 40px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    transform: translateX(50%);
    background: url(${Icon});
    width: 60px;
    height: 60px;
  }
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
