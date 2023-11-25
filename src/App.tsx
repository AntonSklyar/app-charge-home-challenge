import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import Store from './pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Store />
    </ThemeProvider>
  );
};

export default App;
