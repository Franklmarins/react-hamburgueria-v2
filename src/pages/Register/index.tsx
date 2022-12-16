import { Container } from "@mui/material";
import React from "react";
import logo from "./../../assets/BurguerKenzieLogo.svg";
import { FiShoppingBag } from "react-icons/fi";
import { StyledRegister } from "./style";
import Form from "../../components/Form";
import Link from "../../components/Link";

const Register = () => {
  return (
    <Container>
      <StyledRegister>
        <section>
          <img src={logo} alt="logo-burguer-kenzie" />
          <div>
            <div>
              <FiShoppingBag />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os
              <span> melhores</span> ingredientes.
            </p>
          </div>
          <div></div>
        </section>
        <section>
          <div>
            <h3>Cadastrar</h3>
            <Link to="/login" linkstyle="default-link">
              Retornar para o login
            </Link>
          </div>
          <Form />
        </section>
      </StyledRegister>
    </Container>
  );
};

export default Register;
