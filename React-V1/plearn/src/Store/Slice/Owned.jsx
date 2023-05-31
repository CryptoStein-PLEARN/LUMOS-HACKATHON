import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const Owned = createSlice({
  name: "Owned",
  initialState,
  reducers: {
    SetOwned(state, action) {
      state.data = action.payload;
    },
  },
});

export const { SetOwned } = Owned.actions;
export { Owned };
