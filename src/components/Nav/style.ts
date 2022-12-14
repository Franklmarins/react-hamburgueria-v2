import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 10px 16px;
  background: var(--grey-0);

  @media (max-width: 900px) {
    img {
      width: 30%;
    }
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
`;
