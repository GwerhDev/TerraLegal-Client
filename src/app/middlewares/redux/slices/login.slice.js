import { createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "../../misc";

export const loginSlice = createSlice({
    name: LOGIN,
    initialState: false,
    reducers: {

    }
});

export const { } = loginSlice.actions;

export default loginSlice.reducer;