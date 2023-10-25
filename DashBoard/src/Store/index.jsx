import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "./Slice/IsOpenSlice";
import { UserSlice } from "./Slice/userSlice";
const store = configureStore({
  reducer: {
    UserSlice: UserSlice.reducer,
    isOpen: isOpenReducer,
  },
});
export default store;
