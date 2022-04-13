import { css, SerializedStyles } from "@emotion/react";

export const globalStyles = (): SerializedStyles => css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  body {
    min-height: 100vh;
  }
  #__next {
    padding: 5rem;
    marging: 1rem;
    display: flex;
    flex-direction: column;
  }
`;