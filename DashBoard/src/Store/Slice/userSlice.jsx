import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
};
const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});
export const getGetInTouchDetails = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://plearn-backend.onrender.com/getGetInTouchDetails"
    );
    console.log(res.data);
    dispatch(setData(res.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const { setData } = UserSlice.actions;
export { UserSlice };
