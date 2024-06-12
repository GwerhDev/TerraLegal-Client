import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_CONTENT } from "../../misc";

export const contentSlice = createSlice({
  name: ADMIN_CONTENT,
  initialState: {
    contentList: [],
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
  }
});

export default contentSlice.reducer;
