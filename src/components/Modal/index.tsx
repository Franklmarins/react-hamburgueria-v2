import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Cart from "../Cart";
import EmptyBag from "./EmptyBag";
import { StyledModal } from "./style";

const Modal = () => {
  const { removeModal, cart } = useContext(CartContext);

  return (
    <StyledModal>
      <div>
        <div>
          <h3>Carrinho de compras</h3>
          <button onClick={removeModal} type="button">
            X
          </button>
        </div>
        {cart.length === 0 ? <EmptyBag /> : <Cart />}
      </div>
    </StyledModal>
  );
};

export default Modal;
