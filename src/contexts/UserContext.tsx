import React, { createContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  formSchemaLogin,
  formSchemaRegister,
} from "../components/Form/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormValues, iUserProviderProps } from "./types";

export const UserContext = createContext({});

export const UserProvider = ({ children }: iUserProviderProps) => {
  const local = useLocation();

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

  const submit: SubmitHandler<iFormValues> = (data) => console.log(data);

  return (
    <UserContext.Provider
      value={{ register, handleSubmit, errors, reset, submit }}
    >
      {children}
    </UserContext.Provider>
  );
};
