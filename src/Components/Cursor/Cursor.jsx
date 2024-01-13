import React from "react";
import SvgIcon from "../../Images/svg/sprite.svg";
import { CursorWrapper, CursorImage } from "./Cursor.styled";

const CustomCursor = () => {
  return (
    <CursorWrapper>
      <CursorImage src={`${SvgIcon}#icon-pawprint-1`} alt="Custom Cursor" />
    </CursorWrapper>
  );
};

export default CustomCursor;
