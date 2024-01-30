import React, { useState } from 'react';
import { ListContainer, ListItem, Button } from './Menu.styled';
import { Link as ScrollLink } from 'react-scroll';
import Modal from '../../ModalContacts/ModalContacts';

function HeaderMenuList({ items, closeMenu }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
    closeMenu(false);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem key={index} onClick={closeMenu}>
            {item === 'Контакти' ? (
              <Button onClick={openContactModal}>{item}</Button>
            ) : (
              <ScrollLink to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </ScrollLink>
            )}
          </ListItem>
        ))}
      </ListContainer>
      {isContactModalOpen && <Modal onClose={closeContactModal} />}
    </>
  );
}

export default HeaderMenuList;
