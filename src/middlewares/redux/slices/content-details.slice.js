import { createSlice } from "@reduxjs/toolkit";
import { CONTENT_DETAILS } from "../../misc";

export const contentDetailsSlice = createSlice({
  name: CONTENT_DETAILS,
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CONTENT_DETAILS, (state, action) => {
      return action.payload;
    });
  }
});

export default contentDetailsSlice.reducer;
