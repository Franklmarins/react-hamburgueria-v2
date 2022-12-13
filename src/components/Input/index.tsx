import { StyledInput } from "./style";

interface IInputProps {
  placeholder: string;
  inputStyle: string;
}

const Input = ({ placeholder, inputStyle }: IInputProps) => {
  return (
    <>
      <StyledInput placeholder={placeholder} inputStyle={inputStyle} />
    </>
  );
};

export default Input;
