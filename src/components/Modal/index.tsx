import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import EmptyBag from "./EmptyBag";
import { StyledModal } from "./style";

const Modal = () => {
  const { removeModal } = useContext(CartContext);

  return (
    <StyledModal>
      <div>
        <div>
          <h3>Carrinho de compras</h3>
          <button onClick={removeModal} type="button">
            X
          </button>
        </div>
        <EmptyBag />
      </div>
    </StyledModal>
  );
};

export default Modal;
