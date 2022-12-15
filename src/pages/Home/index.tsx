import { useContext } from "react";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "../../styles/container";
import { StyledHome } from "./style";

export interface iProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  count?: number | undefined;
}

const Home = () => {
  const { filter } = useContext(ProductContext);
  const { showModal } = useContext(CartContext);

  return (
    <>
      {showModal ? <Modal /> : null}
      <StyledHome>
        <Nav />
        <Container>
          <main>
            <ul>
              {filter.map((product) => {
                return (
                  <Card
                    product={product}
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
    </>
  );
};

export default Home;
