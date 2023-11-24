import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@400;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
    font-family: 'Grandstander', cursive;
  }
`;

export default GlobalStyles;