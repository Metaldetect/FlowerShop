import styled from "styled-components";
import PeopleIcon from "../../images/icon/rewiew-people-1.png";
import PeopleIcon2 from "../../images/icon/rewiew-people-2.png";
import PeopleIcon3 from "../../images/icon/rewiew-people-3.png";
import StarsIcon from "../../images/icon/stars.png";

export const ReviewContainer = styled.div`
  position: relative;
  margin-top: 120px;
`;

export const ReviewTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-left: 40px;
`;

export const CommonReviewComment = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 65px;
  background-color: var(--pink);
`;

export const CommonReviewSubTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-left: 260px;
  margin-top: 35px;
  width: 400px;
  color: var(--white);
`;

export const ReviewComment1 = styled(CommonReviewComment)`
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const ReviewCommentTitle1 = styled.h3`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  padding-top: 24px;
  margin-left: 260px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 20%;
    left: -15%;
    width: 65px;
    height: 65px;
    background: url(${PeopleIcon});
  }

  &::after {
    content: "";
    position: absolute;
    top: 115%;
    left: 0;
    width: 100px;
    height: 16px;
    background: url(${StarsIcon});
`;

export const ReviewCommentSubTitle1 = styled(CommonReviewSubTitle)``;

export const ReviewComment2 = styled(CommonReviewComment)`
  margin-left: auto;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const ReviewCommentTitle2 = styled.h3`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  padding-top: 24px;
  margin-left: 260px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    z-index: 1;
    top: 20%;
    left: -15%;
    width: 65px;
    height: 65px;
    background: url(${PeopleIcon2});
  }

    &::after {
    content: "";
    position: absolute;
    top: 115%;
    left: 0;
    width: 100px;
    height: 16px;
    background: url(${StarsIcon});
`;

export const ReviewCommentSubTitle2 = styled(CommonReviewSubTitle)``;

export const ReviewComment3 = styled(CommonReviewComment)`
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const ReviewCommentTitle3 = styled.h3`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  padding-top: 24px;
  margin-left: 260px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    z-index: 1;
    top: 20%;
    left: -15%;
    width: 65px;
    height: 65px;
    background: url(${PeopleIcon3});
  }

    &::after {
    content: "";
    position: absolute;
    top: 115%;
    left: 0;
    width: 100px;
    height: 16px;
    background: url(${StarsIcon});
`;

export const ReviewCommentSubTitle3 = styled(CommonReviewSubTitle)``;
