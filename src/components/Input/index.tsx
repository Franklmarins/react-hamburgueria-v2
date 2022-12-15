import { ChangeEventHandler } from "react";
import { StyledInput } from "./style";

interface iInputProps {
  placeholder: string;
  inputStyle: string;
  type: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, type, inputStyle, ...rest }: iInputProps) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        inputStyle={inputStyle}
        {...rest}
      />
    </>
  );
};

export default Input;
