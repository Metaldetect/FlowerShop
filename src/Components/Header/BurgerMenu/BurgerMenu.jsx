import React from 'react';
import { BurgerMenuIcon, BurgerMenuContainer } from './BurgerMenu.styled';
import MenuBtn from '../MenuBtn';
import HeaderMenuList from '../Menu/Menu';

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  const menuItem = ['Букети', 'Доставка', 'Відгуки', 'Контакти'];

  return (
    <>
      <BurgerMenuIcon onClick={() => setIsOpen(prev => !prev)}>
        <MenuBtn isOpen={isOpen} />
      </BurgerMenuIcon>
      <BurgerMenuContainer isOpen={isOpen}>
        <HeaderMenuList items={menuItem} closeMenu={setIsOpen} />
      </BurgerMenuContainer>
    </>
  );
};

export default BurgerMenu;
