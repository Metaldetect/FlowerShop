import styled from 'styled-components';
import VektorRoad from '../../images/icon/vektor-ppl.png';
import Clock from '../../images/svg/clock-ppl.svg';
import PigMoney from '../../images/svg/pig-money-ppl.svg';
import BackgroundIcon from '../../images/icon/vektor-tree-ppl.png';

export const DeliveryContainer = styled.div`
  position: relative;
  margin-top: 120px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 20%;
    right: 20%;
    z-index: 1;
    background-image: url(${process.env.PUBLIC_URL}/images/bg/img-ppl.png);
    background-repeat: no-repeat;
    width: 375px;
    height: 550px;
  }

  &::after {
    content: '';
    z-index: 2;
    display: block;
    background: url(${BackgroundIcon}) no-repeat;
    position: absolute;
    top: 6%;
    right: 2%;
    width: 300px;
    height: 400px;
  }
  @media (max-width: 768px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const DeliveryTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-left: 200px;
  color var(--black);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: url(${VektorRoad}) no-repeat;
    display: block;
    color: var(--black);
    width: 340px;
    height: 500px;
    top: 100%;
    left: 10%;
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
    text-align: center;
    margin-left: 0;
    font-size: 36px;
  }
`;

export const DeliverySubTitle = styled.h3`
  font-size: 36px;
  font-weight: 400;
  width: 250px;
  margin-top: 280px;
  margin-left: 150px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -40px;
    display: block;
    background: url(${Clock});
    width: 36px;
    height: 36px;
  }

  &::after {
    content: 'Доставка до 3 годин по Києву.';
    font-size: 20px;
    font-weight: 400;
    display: block;
    margin-top: 10px;
    margin-left: 25px;
  }

  @media (max-width: 768px) {
    &::after {
      margin-left: 0;
    }
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
`;

export const DeliverySubTitleComment = styled.h3`
  font-size: 36px;
  font-weight: 400;
  width: 350px;
  margin-top: 180px;
  margin-left: 170px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -40px;
    display: block;
    background: url(${PigMoney});
    width: 36px;
    height: 36px;
  }

  &::after {
    content: 'При замовленні над 1000 гривень доставка в рамках Києва безкоштовна.';
    font-size: 20px;
    font-weight: 400;
    display: block;
    margin-top: 10px;
    margin-left: 25px;
  }

  @media (max-width: 768px) {
    &::after {
      margin-left: 0;
    }
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 80%;
  }
`;

export const DeliveryBackground = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 730px;
  background-color: var(--gray);
  border: none;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;

  @media (max-width: 768px) {
    display: none;
  }
`;
