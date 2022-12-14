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
          id="email"
          label="Digite o seu email"
          variant="outlined"
          {...register("email")}
        />

        {errors.email?.message && <span>{errors.email.message}</span>}

        <TextField
          type="password"
          id="password"
          label="Digite sua senha"
          variant="outlined"
          {...register("password")}
        />

        {errors.password?.message && <span>{errors.password.message}</span>}

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
          type="text"
          id="name"
          label="Digite seu nome"
          variant="outlined"
          {...register("name")}
        />

        {errors.name?.message && <span>{errors.name.message}</span>}

        <TextField
          id="email"
          label="Digite o seu email"
          variant="outlined"
          {...register("email")}
        />

        {errors.email?.message && <span>{errors.email.message}</span>}

        <TextField
          type="password"
          id="password"
          label="Digite sua senha"
          variant="outlined"
          {...register("password")}
        />

        {errors.password?.message && <span>{errors.password.message}</span>}

        <TextField
          type="password"
          id="passwordConfirmation"
          label="Digite sua senha novamente"
          variant="outlined"
          {...register("passwordConfirmation")}
        />

        {errors.passwordConfirmation?.message && (
          <span>{errors.passwordConfirmation.message}</span>
        )}

        <Button type="submit" buttonStyle="default-grey-2">
          Cadastrar
        </Button>
      </StyledForm>
    );
  }

  return null;
};

export default Form;
