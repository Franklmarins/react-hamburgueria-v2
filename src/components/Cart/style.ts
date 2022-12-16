import styled from "styled-components";

export const StyledCart = styled.div`
  padding: 20px;

  section:nth-child(1) {
    max-height: 500px;

    overflow: auto;

    > div {
      display: flex;
    }
    > div > div:nth-child(1) {
      width: 80px;
      height: 80px;

      background: var(--grey-100);
      img {
        object-fit: cover;
      }
    }
  }
`;
