import { configureStore } from "@reduxjs/toolkit";
import { Tools } from "./Slice/userSlice";
import { Blog } from "./Slice/Cardslice";
import { Bid } from "./Slice/Bidslice";
const store = configureStore({
  reducer: {
    tools: Tools.reducer,
    Blog: Blog.reducer,
    Bid: Bid.reducer,
  },
});

export default store;
