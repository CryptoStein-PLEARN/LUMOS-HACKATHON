import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
  filteredCards: [],
  searchQuery: "",
  sortBy: "",
};
const Tools = createSlice({
  name: "Tool",
  initialState,
  reducers: {
    updateCards(state, action) {
      state.cards = action.payload;
    },
    filterCards(state, action) {
      if (action.payload === "All" && state.searchQuery.length === 0) {
        state.filteredCards = state.cards;
      } else {
        state.filteredCards = state.cards.filter(
          (card) => card.category === action.payload
        );
      }
      state.filterActive = true;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.filterActive = true;
      state.filteredCards = state.cards.filter((card) => {
        return (
          card.details.some((detail) => {
            return detail.name.toLowerCase() === action.payload.toLowerCase();
          }) ||
          card.category.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
    },
  },
});

export const { filterCards, setSearchQuery, updateCards } = Tools.actions;
export { Tools };
