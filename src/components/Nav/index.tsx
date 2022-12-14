import React from "react";
import { Container } from "../../styles/container";
import { StyledNav } from "./style";
import logo from "./../../assets/BurguerKenzieLogo.svg";
import Search from "../Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = () => {
  return (
    <StyledNav>
      <Container>
        <div>
          <img src={logo} alt="logo-burguer-kenzie" />
          <div>
            <Search />
            <div>
              <ShoppingCartIcon />
            </div>
            <LogoutIcon />
          </div>
        </div>
      </Container>
    </StyledNav>
  );
};

export default Nav;
