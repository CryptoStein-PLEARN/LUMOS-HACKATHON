import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Slice/userSlice";
const store = configureStore({
  reducer: {
    UserSlice: UserSlice.reducer,
  },
});

export default store;
