import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import Input from "../Input";
import { StyledForm } from "./style";

const Form = () => {
  const { submit, handleSubmit, local, register } = useContext(UserContext);

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="email"
        placeholder="Digite o seu email"
        inputStyle="default"
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        inputStyle="default"
        {...register("password")}
      />
      <Button type="submit" buttonStyle="default-primary">
        Logar
      </Button>
    </StyledForm>
  );
};

export default Form;
