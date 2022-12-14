import styled, { css } from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";

interface IInputStyle {
  inputStyle: string;
}

export const StyledInput = styled.input`
  height: 60px;

  padding: 20px;

  border-radius: 8px;

  font-size: var(--font-size-4);
  font-weight: var(--font-weight-3);
  color: #000000;

  ${({ inputStyle }: IInputStyle) => {
    switch (inputStyle) {
      case "default":
        return css`
          background: var(--grey-0);
          border: none;
          ::placeholder {
            font-size: var(--font-size-4);
            font-weight: var(--font-weight-3);
            color: #999999;
          }
          :focus {
            background: #ffffff;
          }
        `;
      case "search":
        return css`
          background: #ffffff;

          border: 2px solid var(--grey-100);

          outline: none;

          ::placeholder {
            color: var(--grey-100);
          }

          :focus {
            border: 2px solid var(--grey-600);
            ::placeholder {
              color: var(--grey-300);
            }
          }
        `;
    }
  }}
`;
