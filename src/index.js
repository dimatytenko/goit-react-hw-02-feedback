import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import './styles/base.scss';
import { Global } from './Global';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
