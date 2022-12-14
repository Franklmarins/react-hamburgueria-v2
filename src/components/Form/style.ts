import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;

  width: 100%;

  span {
    margin-top: -10px;

    font-size: var(--font-size-6);

    text-align: start;

    color: var(--negative);
  }
`;
