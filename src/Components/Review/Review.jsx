import React from "react";
import { Element } from "react-scroll";
import {
  ReviewContainer,
  ReviewTitle,
  ReviewComment1,
  ReviewCommentTitle1,
  ReviewCommentSubTitle1,
  ReviewComment2,
  ReviewCommentTitle2,
  ReviewCommentSubTitle2,
  ReviewComment3,
  ReviewCommentTitle3,
  ReviewCommentSubTitle3,
} from "./Review.styled";

function Review() {
  return (
    <Element name="відгуки">
      <ReviewContainer>
        <ReviewTitle>Відгуки</ReviewTitle>
        <ReviewComment1>
          <ReviewCommentTitle1>Ольга Стасюк</ReviewCommentTitle1>
          <ReviewCommentSubTitle1>
            Дуже задоволена сервісом, чудові квіти які приємно пахнуть, швидко
            та оперативно!
          </ReviewCommentSubTitle1>
        </ReviewComment1>
        <ReviewComment2>
          <ReviewCommentTitle2>Віктор Сірий</ReviewCommentTitle2>
          <ReviewCommentSubTitle2>
            Користуюсь послугами цієї квіткарні з самого відкриття в нашому
            місті, завжди задоволений цінами та якістю замовлень.
          </ReviewCommentSubTitle2>
        </ReviewComment2>
        <ReviewComment3>
          <ReviewCommentTitle3>Надія Богнат</ReviewCommentTitle3>
          <ReviewCommentSubTitle3>
            Найкращий вибір квітів в місті Київ. Найшвидша і найякісніша
            доставка.
          </ReviewCommentSubTitle3>
        </ReviewComment3>
      </ReviewContainer>
    </Element>
  );
}

export default Review;
