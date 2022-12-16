import styled from "styled-components";

export const StyledSearch = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  > div {
    position: absolute;
    margin-right: 10px;

    background-color: var(--color-primary);

    height: 40px;
    width: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    z-index: 3;

    > svg {
      color: #ffffff;
    }
  }

  > input {
    position: absolute;
    min-width: 300px;
    z-index: 2;
  }
  @media (max-width: 900px) {
    > div {
      right: -95px;
    }
    > input {
      right: -95px;
    }
  }
  @media (max-width: 315px) {
    > input {
      min-width: 40vh;
      width: 200px;
    }
  }
`;
