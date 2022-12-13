import React from "react";
import Button from "../Button";
import Input from "../Input";
import { StyledForm } from "./style";

const Form = () => {
  return (
    <StyledForm>
      <Input placeholder="Digite o seu username" inputStyle="default" />
      <Input placeholder="Digite sua senha" inputStyle="default" />
      <Button type="submit" buttonStyle="default-primary">
        Logar
      </Button>
    </StyledForm>
  );
};

export default Form;
