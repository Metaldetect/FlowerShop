// ContactModalInfo.styled.js
import styled from "styled-components";

export const ContactModalInfoContainer = styled.div`
  padding: 40px;
`;

export const ContactModalInfoTitle = styled.h2`
  font-size: 24px;
  color: var(--black);
`;

export const ContactInfoItem = styled.p`
  margin-top: 30px;
  font-size: 16px;
  color: var(--black);
`;

export const SocialMediaContainer = styled.div`
  margin-top: 20px;
`;

export const SocialMediaLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
`;

export const SocialMediaIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 50px;

  padding: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;
