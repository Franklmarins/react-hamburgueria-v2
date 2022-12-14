import { createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import { iFormValues, iUserContext, iUserProviderProps } from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const local = useLocation();
  const navigate = useNavigate();

  const submit: SubmitHandler<iFormValues> = (data) => {
    if (local.pathname === "/register") {
      const { email, name, password } = data;
      const newData = { email, name, password };

      toast.promise(
        api.post("/users", newData).then((response) => {
          console.log(response.data);
          return response.data;
        }),
        {
          pending: "Logando...",
          success: {
            render() {
              navigate("/login");
              return "Cadastrado com sucesso!";
            },
          },
          error: "Email já existente! 🤯",
        }
      );
    }
    if (local.pathname === "/login") {
      toast.promise(
        api.post("/login", data).then((response) => {
          return response.data;
        }),
        {
          pending: {
            render() {
              return "Logando...";
            },
          },
          success: {
            render({ data }) {
              localStorage.clear();
              localStorage.setItem("token", data.accessToken);
              localStorage.setItem("userID", data.user.id);

              navigate("/home");
              return `Olá ${data.user.name}, seja bem-vindo! 👌`;
            },
          },
          error: {
            render() {
              return "Email e/ou senha inválidos! 🤯";
            },
          },
        }
      );
    }
  };

  return (
    <UserContext.Provider value={{ submit, local }}>
      {children}
    </UserContext.Provider>
  );
};
