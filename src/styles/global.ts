import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  a {
    color: unset;
    text-decoration: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  span,
  li,
  button,
  input,
  label {
    font-family: "Inter", sans-serif;
  }
  
:root {
  --color-primary: #27AE60;
  --color-secondary: #EB5757;

  --grey-0: #F5F5F5;
  --grey-100: #E0E0E0;
  --grey-300: #828282;
  --grey-600: #333333;
  
  --sucess: #168821;
  --warning: #FFCD07;
  --negative: #E60000;
  --information: #155BCB;
  
  --font-size-1: 1.625rem; /* 26px */
  --font-size-2: 1.375rem; /* 22px */
  --font-size-3: 1.125rem; /* 18px */
  --font-size-4: 1rem; /* 16px */
  --font-size-5: 0.875rem; /* 14px */
  --font-size-6: 0.75rem; /* 12px */


  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 400;
}
`;
