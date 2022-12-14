import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { iFormValues } from "../../contexts/types";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { formSchemaLogin, formSchemaRegister } from "./formSchema";
import { StyledForm } from "./style";

const Form = () => {
  const { submit, local } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormValues>(
    local.pathname === "/login"
      ? {
          resolver: yupResolver(formSchemaLogin),
        }
      : {
          resolver: yupResolver(formSchemaRegister),
        }
  );

  if (local.pathname === "/login") {
    return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <TextField
          helperText={errors.email?.message}
          color={errors.email?.message ? "error" : "success"}
          id="email"
          label="Digite o seu email"
          variant="outlined"
          {...register("email")}
        />

        <TextField
          helperText={errors.password?.message}
          color={errors.password?.message ? "error" : "success"}
          type="password"
          id="password"
          label="Digite sua senha"
          variant="outlined"
          {...register("password")}
        />

        <Button type="submit" buttonStyle="default-primary">
          Logar
        </Button>
      </StyledForm>
    );
  }

  if (local.pathname === "/register") {
    return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <TextField
          helperText={errors.name?.message}
          color={errors.name?.message ? "error" : "success"}
          type="text"
          id="name"
          label="Digite seu nome"
          variant="outlined"
          {...register("name")}
        />

        <TextField
          helperText={errors.email?.message}
          color={errors.email?.message ? "error" : "success"}
          id="email"
          label="Digite o seu email"
          variant="outlined"
          {...register("email")}
        />

        <TextField
          helperText={errors.password?.message}
          color={errors.password?.message ? "error" : "success"}
          type="password"
          id="password"
          label="Digite sua senha"
          variant="outlined"
          {...register("password")}
        />

        <TextField
          helperText={errors.passwordConfirmation?.message}
          color={errors.passwordConfirmation?.message ? "error" : "success"}
          type="password"
          id="passwordConfirmation"
          label="Digite sua senha novamente"
          variant="outlined"
          {...register("passwordConfirmation")}
        />

        <Button type="submit" buttonStyle="default-grey-2">
          Cadastrar
        </Button>
      </StyledForm>
    );
  }

  return null;
};

export default Form;
