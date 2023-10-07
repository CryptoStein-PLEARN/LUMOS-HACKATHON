import { createSlice } from "@reduxjs/toolkit";

const isOpenSlice = createSlice({
  name: "isOpen",
  initialState: false,
  reducers: {
    toggleOpen: (state) => !state,
  },
});

export const { toggleOpen } = isOpenSlice.actions;
export default isOpenSlice.reducer;
