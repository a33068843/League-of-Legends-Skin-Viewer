import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from '@/styles';
import { Base } from '@/pages';
// import '@/styles/reset.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </React.StrictMode>
);
