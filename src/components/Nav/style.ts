import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 25px 16px;
  background: var(--grey-0);

  button {
    color: #bdbdbd;
  }

  @media (max-width: 900px) {
    img {
      width: 150px;
    }
  }

  > div {
    width: 100%;
  }

  > div > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  .cart {
    position: relative;
    > span {
      position: absolute;

      top: -15px;
      right: -10px;

      padding: 4px;

      background: var(--color-primary);

      color: #ffffff;

      font-size: var(--font-size-5);
      font-weight: var(--font-weight-1);

      border-radius: 7px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
