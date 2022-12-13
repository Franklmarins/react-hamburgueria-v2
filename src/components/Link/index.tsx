import React from "react";
import { StyledLink } from "./style";

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  linkstyle: string;
}

const Link = ({ children, to, linkstyle }: ILinkProps) => {
  return (
    <StyledLink to={to} linkstyle={linkstyle}>
      {children}
    </StyledLink>
  );
};

export default Link;
