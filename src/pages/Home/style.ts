import styled from "styled-components";

export const StyledHome = styled.div`
  ul {
    margin-top: 24px;
    margin-bottom: 30px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 900px) {
    ul {
      flex-wrap: nowrap;
      overflow: auto;
      align-items: flex-start;
      justify-content: flex-start;
      width: 110%;
      margin-left: -5%;
    }
  }
`;
