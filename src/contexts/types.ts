import { Dispatch, SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";
import { iProduct } from "../pages/Home";

export interface iProviderProps {
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
  logOut: () => void;
}

export interface iProductsContext {
  filter: iProduct[];
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface iCartContext {
  showModal: boolean;
  addModal: () => void;
  removeModal: () => void;
  addItemToCart: (item: iProduct) => void;
  cart: iProduct[];
  handleIncrementCount: (item: number) => void;
  handleDecrementCount: (item: number) => void;
  deleteCartProduct: (item: number) => void;
  removeAllProductCart: () => void;
  cartValues: number;
}
