import { createSlice } from "@reduxjs/toolkit";
import { LOGIN, AUTH } from "../../misc";

export const loginSlice = createSlice({
  name: LOGIN,
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
      });
  }
});

export default loginSlice.reducer;
