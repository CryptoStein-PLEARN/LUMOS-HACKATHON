import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
};

const Id = createSlice({
  name: "Id",
  initialState,
  reducers: {
    SetId(state, action) {
      if (action.payload.price !== -1) {
        state.id = action.payload._id;
      } else {
        state.id = "";
      }
    },
  },
});

export const { SetId } = Id.actions;
export { Id };
