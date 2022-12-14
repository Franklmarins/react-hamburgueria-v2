import React from "react";
import Button from "../Button";
import { StyledLi } from "./style";

interface iCard {
  category: string;
  img: string;
  name: string;
  price: number;
}

const Card = ({ img, name, price, category }: iCard) => {
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
        <Button type="button" buttonStyle="medium-primary">
          Adicionar
        </Button>
      </div>
    </StyledLi>
  );
};

export default Card;
