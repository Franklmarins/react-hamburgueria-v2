import React from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledCart } from "./style";

const Cart = () => {
  const {
    cart,
    handleIncrementCount,
    handleDecrementCount,
    deleteCartProduct,
    removeAllProductCart,
    cartValues,
  } = React.useContext(CartContext);

  return (
    <StyledCart>
      <section>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <div>
                <img src={product.img} alt={product.name} />
              </div>
              <div>
                <h3>{product.name}</h3>
                <div>
                  <button onClick={() => handleDecrementCount(product.id)}>
                    -
                  </button>
                  <div>
                    <span>{product.count}</span>
                  </div>
                  <button onClick={() => handleIncrementCount(product.id)}>
                    +
                  </button>
                </div>
                <button onClick={() => deleteCartProduct(product.id)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <section>
        <div>
          <span>Total</span>
          <span>
            {cartValues.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <Button
          onClick={() => removeAllProductCart()}
          type="button"
          buttonStyle="default-grey"
        >
          Remover todos
        </Button>
      </section>
    </StyledCart>
  );
};

export default Cart;
