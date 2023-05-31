import { configureStore } from "@reduxjs/toolkit";
import { Tools } from "./Slice/userSlice";
import { Blog } from "./Slice/Cardslice";
import { Bid } from "./Slice/Bidslice";
import { Id } from "./Slice/Id";
import { Owned } from "./Slice/Owned";
const store = configureStore({
  reducer: {
    tools: Tools.reducer,
    Blog: Blog.reducer,
    Bid: Bid.reducer,
    Id: Id.reducer,
    Owned: Owned.reducer,
  },
});

export default store;
