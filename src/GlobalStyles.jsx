import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Your reset styles go here */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue','Arial', sans-serif;
    margin: 1em 12em; 
    @media (min-width: 2400px) {
      /* Apply styles for big screens (width greater than or equal to 2400px) */
      margin: 1em 35em;
    }
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;