import { createSlice } from "@reduxjs/toolkit";
import { CONTENT } from "../../misc";

export const contentSlice = createSlice({
  name: CONTENT,
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CONTENT, (state, action) => {
      return action.payload;
    });
  }
});

export default contentSlice.reducer;
