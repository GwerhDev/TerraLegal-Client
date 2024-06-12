import { createSlice } from "@reduxjs/toolkit";
import { LOGIN, AUTH, LOGOUT, ACCOUNT } from "../../misc";

export const accountSlice = createSlice({
  name: ACCOUNT,
  initialState: {
    userToken: null,
    currentUser: null,
    logged: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LOGIN, (state, action) => {
        return {
          ...state,
          userToken: action.payload,
        };
      })
      .addCase(AUTH, (state, action) => {
        return {
          ...state,
          currentUser: action.payload,
          logged: true,
        };
      })
      .addCase(LOGOUT, (state, action) => {
        return {
          ...state,
          currentUser: action.payload,
          logged: false,
        };
      });
  }
});

export default accountSlice.reducer;
