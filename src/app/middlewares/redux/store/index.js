import { configureStore } from '@reduxjs/toolkit';
import login from '../slices/login.slice';
import { environment } from '../../../environment';
import { DEVELOPMENT, PRODUCTION } from '../../misc';

let store;

if (environment === DEVELOPMENT) {
  store = configureStore({
    reducer: {
      login,
    },
    devTools: environment !== PRODUCTION,
  });
} else {
  store = configureStore({
    reducer: {
      login,
    },
    devTools: environment !== PRODUCTION,
  });
}

export default store;
