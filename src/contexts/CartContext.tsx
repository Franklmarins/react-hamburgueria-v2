import { createContext } from "react";
import { iProviderProps } from "./types";

export const CartContext = createContext({});

export const CartProvider = ({ children }: iProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
