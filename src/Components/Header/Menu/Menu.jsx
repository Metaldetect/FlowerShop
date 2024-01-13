import React, { useState } from "react";
import { ListContainer, ListItem, Button } from "./Menu.styled";
import { Link as ScrollLink } from "react-scroll";
import Modal from "../../ModalContacts/ModalContacts";

function HeaderMenuList({ items }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem key={index}>
            {item === "Контакти" ? (
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
