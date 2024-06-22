import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './states/store.js';
import LoadingBar from 'react-redux-loading-bar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingBar />
      <App />
    </Provider>
  </React.StrictMode>,
);
