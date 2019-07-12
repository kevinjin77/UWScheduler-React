import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Main from './components/Main'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fdd835',
      // main: '#8bc34a',
    },
    contrastThreshold: 3,
    tonalOffset: 0.5,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
