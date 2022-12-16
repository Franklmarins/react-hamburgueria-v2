import styled from "styled-components";

export const StyledCart = styled.div`
  padding: 20px;

  section:nth-child(1) {
    padding: 0 0 20px 0;

    max-height: 300px;
    height: auto;

    overflow: auto;

    margin-bottom: 18px;

    display: flex;
    flex-direction: column;
    gap: 18px;

    > div {
      display: flex;
      gap: 10px;

      height: 80px;
    }
    > div > div:nth-child(1) {
      width: 80px;
      height: 100%;

      background: var(--grey-100);

      border-radius: 5px;
      img {
        height: 100%;

        object-fit: cover;
      }
    }
    > div > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: relative;

      width: 100%;

      > h3 {
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-1);

        color: var(--grey-600);
      }

      > div {
        height: 34px;

        display: flex;

        > button {
          background: var(--grey-100);

          height: 100%;
          width: 30px;

          font-size: var(--font-size-2);
          font-weight: var(--font-weight-3);

          color: var(--color-secondary);

          &:hover {
            opacity: 70%;
          }
        }
        > div {
          height: 100%;
          width: 45px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-top: 1px solid var(--grey-100);
          border-bottom: 1px solid var(--grey-100);

          > span {
            font-size: var(--font-size-6);
            font-weight: var(--font-weight-3);

            color: #000000;
          }
        }
      }

      > button {
        position: absolute;

        right: 5px;
        top: 0;

        color: #bdbdbd;
      }
    }
  }
  section:nth-child(2) {
    border-top: 2px solid var(--grey-100);

    display: flex;
    flex-direction: column;
    gap: 18px;

    > div {
      display: flex;
      justify-content: space-between;

      margin-top: 15px;

      > span {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);

        color: var(--grey-600);
      }
      > span:nth-child(2) {
        color: var(--grey-300);
      }
    }
  }
`;
