import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ILinkStyle {
  linkstyle: string;
}

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;

  border-radius: 8px;

  color: #ffffff;

  font-size: var(--font-size-4);
  font-weight: var(--font-weight-2);

  text-transform: capitalize;

  ${({ linkstyle }: ILinkStyle) => {
    switch (linkstyle) {
      case "default-primary":
        return css`
          height: 60px;

          background-color: var(--color-primary);

          :hover {
            opacity: 50%;
          }
        `;
      case "default-grey":
        return css`
          height: 60px;

          color: var(--grey-300);
          background-color: var(--grey-100);

          :hover {
            color: var(--grey-100);
            background-color: var(--grey-300);
          }
        `;
      case "medium-primary":
        return css`
          height: 40px;

          background-color: var(--color-primary);

          :hover {
            opacity: 50%;
          }
        `;
      case "medium-grey":
        return css`
          height: 40px;

          color: var(--grey-300);
          background-color: var(--grey-100);

          :hover {
            color: var(--grey-100);
            background-color: var(--grey-300);
          }
        `;
      case "default-link":
        return css`
          color: var(--grey-300);

          font-size: var(--font-size-5);
          font-weight: var(--font-weight-3);

          text-decoration: underline;

          padding: 0;

          text-transform: none;

          :hover {
            color: var(--grey-600);
          }
        `;
    }
  }}
`;
