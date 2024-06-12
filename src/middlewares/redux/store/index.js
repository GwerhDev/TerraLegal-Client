import { configureStore } from '@reduxjs/toolkit';
import { environment } from '../../../environment';
import { DEVELOPMENT } from '../../misc';
import loginSlice from '../slices/login.slice';
import contentSlice from '../slices/content.slice';
import adminSlice from '../slices/admin.slice';

let store;

const reducer = {
  admin: adminSlice,
  account: loginSlice,
  content: contentSlice,
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
