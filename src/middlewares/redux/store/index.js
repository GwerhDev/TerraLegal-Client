import { configureStore } from '@reduxjs/toolkit';
import { environment } from '../../../environment';
import { DEVELOPMENT } from '../../misc';
import adminSlice from '../slices/admin.slice';
import accountSlice from '../slices/account.slice';
import contentSlice from '../slices/content.slice';

let store;

const reducer = {
  admin: adminSlice,
  account: accountSlice,
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
