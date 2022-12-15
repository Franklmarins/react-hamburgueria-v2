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
  } = React.useContext(CartContext);

  return (
    <StyledCart>
      <section>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <p>{product.name}</p>
                <div>
                  <button onClick={() => handleDecrementCount(product.id)}>
                    -
                  </button>
                  <span>{product.count}</span>
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
          <span>R$ 14,00</span>
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
