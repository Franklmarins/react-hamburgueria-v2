import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  > div {
    display: flex;
    flex-direction: column;
    background: var(--grey-0);
    position: relative;
    width: auto;
    height: auto;
    border-radius: 4px;
  }
  > div > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    padding: 13px 22px;
    background: var(--color-primary);
    border-radius: 4px 4px 0 0;
    > h3 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      color: var(--grey-0);
    }
    > button {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-2);
      color: var(--grey-0);
    }
  }

  @media (max-width: 900px) {
    > div {
      width: 90%;
      max-width: 500px;
    }
    > div > div:nth-child(1) {
      width: 100%;
    }
  }
`;
