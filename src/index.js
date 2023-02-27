import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core';
import { RefreshContextProvider } from './contexts/RefreshContext';
import { ThemeContextProvider } from './contexts/ThemeContext'
import { configureStore } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { getLibrary } from './utils/web3React';

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={configureStore()}>
      <ThemeContextProvider>
        <RefreshContextProvider>
          <App />
        </RefreshContextProvider>
      </ThemeContextProvider>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

