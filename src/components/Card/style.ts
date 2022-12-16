import styled from "styled-components";

export const StyledLi = styled.li`
  max-height: 361px;
  min-width: 300px;
  max-width: 300px;

  border: 2px solid var(--grey-100);
  border-radius: 5px;

  > div:nth-child(1) {
    height: 150px;
    background: var(--grey-0);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  > div:nth-child(2) {
    height: 196px;

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      color: var(--grey-600);
    }
    p {
      font-size: var(--font-size-6);
      font-weight: var(--font-weight-3);
      color: var(--grey-300);
    }
    span {
      font-size: var(--font-size-5);
      font-weight: var(--font-weight-2);
      color: var(--color-primary);
    }
  }
  button {
    background: #bdbdbd;
  }

  &:hover {
    border: 2px solid var(--color-primary);
    button {
      background: var(--color-primary);
    }
  }
`;
