import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Nav from "../../components/Nav";
import { api } from "../../services/api";
import { Container } from "../../styles/container";
import { StyledHome } from "./style";

export interface iProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

const Home = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <StyledHome>
      <Nav />
      <Container>
        <main>
          <ul>
            {products.map((product: iProduct) => {
              return (
                <Card
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  img={product.img}
                  price={product.price}
                />
              );
            })}
          </ul>
        </main>
      </Container>
    </StyledHome>
  );
};

export default Home;
