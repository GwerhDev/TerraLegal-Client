import { configureStore } from '@reduxjs/toolkit';
import { environment } from '../../../environment';
import { DEVELOPMENT } from '../../misc';
import loginSlice from '../slices/login.slice';
import contentSlice from '../slices/content.slice';
import contentDetailsSlice from '../slices/content-details.slice';

let store;

const reducer = {
  account: loginSlice,
  content: contentSlice,
  contentDetails: contentDetailsSlice,
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
