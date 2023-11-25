import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@900&display=swap');
  
  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
