import { SubmitHandler } from "react-hook-form";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iFormValues {
  email: string;
  password: string;
  name?: string;
  passwordConfirmation?: string;
}

export interface iUserContext {
  submit: SubmitHandler<iFormValues>;
  local: {
    pathname: string;
    search: string;
    hash: string;
    state: string | null;
    key: string;
  };
}
