import { StyledInput } from "./style";

interface iInputProps {
  placeholder: string;
  inputStyle: string;
  type: string;
}

const Input = ({ placeholder, type, inputStyle }: iInputProps) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        inputStyle={inputStyle}
      />
    </>
  );
};

export default Input;
