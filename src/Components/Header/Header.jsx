import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Span } from "./Header.styled";
import HeaderMenuList from "./Menu/Menu";

function Header() {
  const menuItem = ["Букети", "Доставка", "Відгуки", "Контакти"];

  return (
    <HeaderContainer>
      <NavLink to="/">
        <Span>FlowerLover</Span>
      </NavLink>
      <HeaderMenuList items={menuItem} />
    </HeaderContainer>
  );
}

export default Header;
