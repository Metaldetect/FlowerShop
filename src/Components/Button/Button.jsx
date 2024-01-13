import { CustomButton } from "./Button.styled";

const Button = ({ onClick }) => {
  return <CustomButton onClick={onClick}>Замовити букет</CustomButton>;
};

export default Button;
