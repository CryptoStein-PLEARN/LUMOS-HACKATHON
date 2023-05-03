import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Name: " DEAD PIRATE",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptate eum et. Animi quo rerum omnis vel veniam eligendi veritatis blanditiis assumenda? Quae id non, aliquid cum minus inventore recusandae.",
  id: "",
  ImgUri: "",
  price: 0.289,
  Category: "Character",
};

const Bid = createSlice({
  name: "Bid",
  initialState,
  reducers: {
    SetBid(state, action) {
      if (action.payload.price !== -1) {
        state.Name = action.payload.Name;
        state.desc = action.payload.desc;
        state.id = action.payload.id;
        state.ImgUri = action.payload.ImgUri;
        state.price = action.payload.price;
        state.Category = action.payload.Category;
      } else {
        state.Name = "";
        state.desc = "";
        state.id = "";
        state.ImgUri = "";
        state.price = -1;
        state.Category = "";
      }
    },
  },
});
export const { SetBid } = Bid.actions;
export { Bid };
