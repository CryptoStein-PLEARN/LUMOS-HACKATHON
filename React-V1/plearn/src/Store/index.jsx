import { configureStore } from "@reduxjs/toolkit";
import { Tools } from "./Slice/userSlice";
import { Blog } from "./Slice/Cardslice";
const store = configureStore({
  reducer: {
    tools: Tools.reducer,
    Blog: Blog.reducer,
  },
});

export default store;
