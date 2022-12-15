import { createContext, useEffect, useState } from "react";
import { iProduct } from "../pages/Home";
import { api } from "../services/api";
import { iProductsContext, iProviderProps } from "./types";

export const ProductContext = createContext<iProductsContext>(
  {} as iProductsContext
);

export const ProductProvider = ({ children }: iProviderProps) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getProducts = async () => {
      const response = await api.get("products", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(response.data);
    };
    getProducts();
  }, []);

  const filter = !search
    ? products
    : products.filter((product: iProduct) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <ProductContext.Provider value={{ filter, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
};
