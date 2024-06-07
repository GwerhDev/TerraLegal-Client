import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/root.css';
import './styles/globals.css';

import App from './App.jsx';
import store from './middlewares/redux/store';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
