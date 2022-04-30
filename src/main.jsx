import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from '@/styles';
import { Base } from '@/pages';
// import '@/styles/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
