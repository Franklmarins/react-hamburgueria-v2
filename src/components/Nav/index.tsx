import React, { useContext } from "react";
import { Container } from "../../styles/container";
import { StyledNav } from "./style";
import logo from "./../../assets/BurguerKenzieLogo.svg";
import Search from "../Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

const Nav = () => {
  const { logOut } = useContext(UserContext);
  const { addModal } = useContext(CartContext);

  return (
    <StyledNav>
      <Container>
        <div>
          <img src={logo} alt="logo-burguer-kenzie" />
          <div>
            <Search />
            <div className="cart">
              <span>0</span>
              <button onClick={addModal}>
                <ShoppingCartIcon />
              </button>
            </div>
            <button type="button" onClick={logOut}>
              <LogoutIcon />
            </button>
          </div>
        </div>
      </Container>
    </StyledNav>
  );
};

export default Nav;
