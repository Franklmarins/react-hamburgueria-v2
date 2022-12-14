import styled from "styled-components";

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
  }
  svg {
    color: #ffffff;
  }
  > input {
  }
`;
