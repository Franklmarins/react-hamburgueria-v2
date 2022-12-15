import { createContext, useState } from "react";
import { iProduct } from "../pages/Home";
import { iCartContext, iProviderProps } from "./types";

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([] as iProduct[]);

  const cartValues = cart.reduce(
    (prev, curr) => prev + curr.price * Number(curr.count),
    0
  );

  const addItemToCart = (product: iProduct) => {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, count: Number(item.count) + 1 }
          : item
      );
      setCart(updateCart);
    } else {
      setCart((old) => [...old, { ...product, count: 1 }]);
    }
  };

  const deleteCartProduct = (productId: number) => {
    const updateCart = cart.filter((item) => item.id !== productId);

    setCart(updateCart);
  };

  const removeAllProductCart = () => {
    setCart([]);
  };

  const handleIncrementCount = (productId: number) => {
    const updateCart = cart.map((item) =>
      item.id === productId ? { ...item, count: Number(item.count) + 1 } : item
    );

    setCart(updateCart);
  };
  const handleDecrementCount = (productId: number) => {
    const product = cart.find((item) => item.id === productId);

    if (product?.count && product.count <= 1) {
      const updateCart = cart.filter((item) => item.id !== productId);

      setCart(updateCart);
    } else {
      const updateCart = cart.map((item) =>
        item.id === productId
          ? { ...item, count: Number(item.count) - 1 }
          : item
      );
      setCart(updateCart);
    }
  };

  const addModal = () => {
    setShowModal(true);
  };
  const removeModal = () => {
    setShowModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        showModal,
        addModal,
        removeModal,
        addItemToCart,
        cart,
        handleIncrementCount,
        handleDecrementCount,
        deleteCartProduct,
        removeAllProductCart,
        cartValues,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
