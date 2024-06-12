import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_CONTENT, SET_UPDATING_STATE } from "../../misc";

export const contentSlice = createSlice({
  name: ADMIN_CONTENT,
  initialState: {
    contentList: [],
    updating: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADMIN_CONTENT, (state, action) => {
        return {
          ...state,
          contentList: action.payload,
        };
      })
      .addCase(SET_UPDATING_STATE, (state, action) => {
        return {
          ...state,
          contentList: action.payload,
        };
      })
  }
});

export default contentSlice.reducer;
