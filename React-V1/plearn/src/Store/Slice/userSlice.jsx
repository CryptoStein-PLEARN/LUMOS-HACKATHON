import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
  currentFilter: "",
  currentSearch: "",
};
const Tools = createSlice({
  name: "Tool",
  initialState,
  reducers: {
    SetCards(state, action) {
      state.cards = action.payload;
    },
    filterCards: (state, action) => {
      const { filter, isSameFilter } = action.payload;
      if (isSameFilter) {
        state.currentFilter = "";
      } else {
        state.currentFilter = filter;
      }
    },
    setSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
});

export const { SetCards, filterCards, setSearch } = Tools.actions;
export { Tools };
