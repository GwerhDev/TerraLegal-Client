import { configureStore } from '@reduxjs/toolkit';
import login from '../slices/login.slice';
import { environment } from '../../../environment';
import { DEVELOPMENT, PRODUCTION } from '../../misc';

let store;

if (environment === DEVELOPMENT) {
  console.log(environment)
  store = configureStore({
    reducer: {
      login,
    },
    devTools: environment !== PRODUCTION,
  });
} else {
  console.log(environment)
  store = configureStore({
    reducer: {
      login,
    },
    devTools: environment !== PRODUCTION,
  });
}

export default store;
