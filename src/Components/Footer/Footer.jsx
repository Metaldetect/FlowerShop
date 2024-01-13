import { NavLink } from "react-router-dom";
import {
  StyledFooter,
  PoweredByLink,
  AdditionalLink,
  Comment,
  Span,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <NavLink to="/">
        <Span>FlowerLover</Span>
      </NavLink>
      Powered by{" "}
      <PoweredByLink target="_blank" href="https://linktr.ee/Metaldetect">
        https://linktr.ee
      </PoweredByLink>
      <Comment>If you wish, you can donate to support Ukraine.</Comment>
      <AdditionalLink target="_blank" href="https://u24.gov.ua/">
        Урядовий портал України
      </AdditionalLink>
    </StyledFooter>
  );
};

export default Footer;
