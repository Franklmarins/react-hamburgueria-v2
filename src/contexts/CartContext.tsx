import { createContext, useState } from "react";
import { iCartContext, iProviderProps } from "./types";

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  const addModal = () => {
    setShowModal(true);
  };
  const removeModal = () => {
    setShowModal(false);
  };

  return (
    <CartContext.Provider value={{ showModal, addModal, removeModal }}>
      {children}
    </CartContext.Provider>
  );
};
