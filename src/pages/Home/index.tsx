import { useContext } from "react";
import Card from "../../components/Card";
import Nav from "../../components/Nav";
import { ProductContext } from "../../contexts/ProductContext";
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
  const { filter } = useContext(ProductContext);

  return (
    <StyledHome>
      <Nav />
      <Container>
        <main>
          <ul>
            {filter.map((product: iProduct) => {
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
