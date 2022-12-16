import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iProduct } from "../pages/Home";
import { api } from "../services/api";
import { iProductsContext, iProviderProps } from "./types";
import { UserContext } from "./UserContext";

export const ProductContext = createContext<iProductsContext>(
  {} as iProductsContext
);

export const ProductProvider = ({ children }: iProviderProps) => {
  const { local } = useContext(UserContext);

  const navigate = useNavigate();

  const [products, setProducts] = useState([] as iProduct[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (local.pathname === "/home") {
      const token = localStorage.getItem("token");

      token === null ? navigate("/login") : null;

      const getProducts = async () => {
        const response = await api.get("products", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProducts(response.data);
      };
      getProducts();
    }
  }, [local]);

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
