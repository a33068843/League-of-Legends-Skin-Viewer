import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/stores';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ResetStyle, GlobalStyle } from '@/styles';
import { Base } from '@/pages';
// import '@/styles/reset.css';

const container = document.getElementById('root');
const root = createRoot(container);

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Base />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
