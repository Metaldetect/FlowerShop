import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import { HeaderContainer, Span, MenuContainer } from './Header.styled';
import HeaderMenuList from './Menu/Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItem = ['Букети', 'Доставка', 'Відгуки', 'Контакти'];

  return (
    <HeaderContainer>
      <NavLink to="/">
        <Span>FlowerLover</Span>
      </NavLink>
      <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MenuContainer isOpen={isMenuOpen}>
        <HeaderMenuList items={menuItem} />
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;
