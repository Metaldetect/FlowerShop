import React from "react";
import {
  ContactModalInfoContainer,
  ContactModalInfoTitle,
  ContactInfoItem,
  SocialMediaContainer,
  SocialMediaLink,
  SocialMediaIcon,
} from "./ContactModalInfo.styled";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function ContactModalInfo() {
  return (
    <ContactModalInfoContainer>
      <ContactModalInfoTitle>Звязок з нами</ContactModalInfoTitle>
      <ContactInfoItem>
        <strong>Ім'я та прізвище:</strong> John Doe
      </ContactInfoItem>
      <ContactInfoItem>
        <strong>Місто:</strong> New York
      </ContactInfoItem>
      <ContactInfoItem>
        <strong>Адреса:</strong> Ваша адреса
      </ContactInfoItem>
      <ContactInfoItem>
        <strong>Номер телефону:</strong> +1234567890
      </ContactInfoItem>
      <SocialMediaContainer>
        <SocialMediaLink href="https://www.instagram.com/" target="_blank">
          <SocialMediaIcon as={FaInstagram} />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.facebook.com/" target="_blank">
          <SocialMediaIcon as={FaFacebook} />
        </SocialMediaLink>
      </SocialMediaContainer>
    </ContactModalInfoContainer>
  );
}

export default ContactModalInfo;
