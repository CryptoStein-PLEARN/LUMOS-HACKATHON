import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Name: "",
  desc: "",
  id: "",
  ImgUri: "",
  price: -1,
  Category: "",
};

const Blog = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    SetBlog(state, action) {
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

export const { SetBlog } = Blog.actions;
export { Blog };
