import styled from "styled-components";
import image from "./../../assets/menuImage.svg";

export const StyledRegister = styled.div`
  section:nth-child(1) {
    margin-bottom: 14px;
    img {
      margin-top: 53px;
    }
    > div:nth-child(2) {
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 19px;

      padding: 18px 23px 18px 14px;

      border: 1px solid var(--grey-100);
      border-radius: 5px;

      box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

      > div {
        min-width: 60px;
        min-height: 60px;

        background: rgba(39, 174, 96, 0.1);

        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
          width: 24px;
          height: 24px;

          color: var(--color-primary);
        }
      }
      > p {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-3);

        color: var(--grey-300);
        > span {
          color: var(--grey-600);
        }
      }
    }
  }
  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 19px;

    border: 1px solid var(--grey-100);
    border-radius: 5px;

    padding: 16px 18px;

    text-align: center;

    margin-bottom: 20px;

    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    > h3 {
      margin-bottom: 19px;

      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);

      color: var(--grey-600);
    }
  }
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 100vh;

    gap: 60px;

    section:nth-child(1) {
      > div:nth-child(2) {
        max-width: 377px;

        margin-bottom: 30px;
      }
      > div:nth-child(3) {
        height: 80px;
        background-image: url(${image});
        background-repeat: no-repeat;
      }
    }
    section:nth-child(2) {
      width: 500px;
    }
  }
`;
