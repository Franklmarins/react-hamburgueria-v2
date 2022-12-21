import { Container } from "@mui/system";
import React, { useEffect } from "react";
import logo from "./../../assets/BurguerKenzieLogo.svg";
import { StyledLogin } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import Form from "../../components/Form";
import Link from "../../components/Link";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      return navigate("/home");
    }
  }, [token]);

  return (
    <Container>
      <StyledLogin>
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
          <h3>Login</h3>
          <Form />
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Link to="/register" linkstyle="default-grey">
            Cadastrar
          </Link>
        </section>
      </StyledLogin>
    </Container>
  );
};

export default Login;
