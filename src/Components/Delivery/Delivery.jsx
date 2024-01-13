import React from "react";
import { Element } from "react-scroll";
import {
  DeliveryContainer,
  DeliveryTitle,
  DeliverySubTitle,
  DeliverySubTitleComment,
  DeliveryBackground,
} from "./Delivery.styled";

function Delivery() {
  return (
    <Element name="доставка">
      <DeliveryContainer>
        <DeliveryTitle>Доставка</DeliveryTitle>
        <DeliverySubTitle>Швидко</DeliverySubTitle>
        <DeliverySubTitleComment>Безкоштовно</DeliverySubTitleComment>
        <DeliveryBackground />
      </DeliveryContainer>
    </Element>
  );
}

export default Delivery;
