import React from "react";
import { StyledButton } from "./style";

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  buttonStyle: string;
  onClick?: () => void;
}

const Button = ({ children, type, buttonStyle, onClick }: IButtonProps) => {
  return (
    <StyledButton buttonStyle={buttonStyle} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
