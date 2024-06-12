import { createSlice } from "@reduxjs/toolkit";
import { CONTENT, CONTENT_DETAILS, LASTS_CONTENT } from "../../misc";

export const contentSlice = createSlice({
  name: CONTENT,
  initialState: {
    list: [],
    lasts: [],
    details: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CONTENT, (state, action) => {
        return {
          ...state,
          list: action.payload,
        };
      })
      .addCase(CONTENT_DETAILS, (state, action) => {
        return {
          ...state,
          details: action.payload,
        };
      })
      .addCase(LASTS_CONTENT, (state, action) => {
        return {
          ...state,
          lasts: action.payload,
        };
      });
  }
});

export default contentSlice.reducer;
