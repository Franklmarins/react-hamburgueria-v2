import React, { createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { iFormValues, iUserContext, iUserProviderProps } from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const local = useLocation();

  const submit: SubmitHandler<iFormValues> = (data) => console.log(data);

  return (
    <UserContext.Provider value={{ submit, local }}>
      {children}
    </UserContext.Provider>
  );
};
