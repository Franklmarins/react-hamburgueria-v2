import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../../pages/Home";
import Button from "../Button";
import { StyledLi } from "./style";

interface iCard {
  category: string;
  img: string;
  name: string;
  price: number;
  product: iProduct;
}

const Card = ({ img, name, price, category, product }: iCard) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <StyledLi>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Button
          type="button"
          buttonStyle="medium-primary"
          onClick={() => addItemToCart(product)}
        >
          Adicionar
        </Button>
      </div>
    </StyledLi>
  );
};

export default Card;
