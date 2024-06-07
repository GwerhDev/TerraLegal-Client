import { configureStore } from '@reduxjs/toolkit';
import { environment } from '../../../environment';
import { DEVELOPMENT } from '../../misc';
import loginSlice from '../slices/login.slice';
import contentSlice from '../slices/content.slice';

let store;

const reducer = {
  account: loginSlice,
  content: contentSlice
}

if (environment === DEVELOPMENT) {
  store = configureStore({
    reducer,
    devTools: true,
  });

} else {
  store = configureStore({
    reducer,
    devTools: false,
  });
}

export default store;
