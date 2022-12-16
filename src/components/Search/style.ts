import styled, { css } from "styled-components";

interface iButtonStyleSearch {
  buttonStyleSearch?: string;
}

export const StyledSearch = styled.div`
  position: relative;

  > div {
    position: absolute;

    right: 10px;
    top: 10px;

    background-color: var(--color-primary);

    height: 40px;
    width: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    > svg {
      color: #ffffff;
    }
  }

  > input {
    width: 100%;
  }

  ${({ buttonStyleSearch }: iButtonStyleSearch) => {
    switch (buttonStyleSearch) {
      case "white":
        return css`
          color: #ffffff;
        `;
      case "grey":
        return css`
          color: #bdbdbd;
        `;
    }
  }}
`;
