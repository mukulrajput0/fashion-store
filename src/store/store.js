import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slice/searchSlice";
import cartReducer from "../slice/counterSlice";

export const store = configureStore({
  reducer: {
    addToCard: cartReducer,
     search: searchReducer,
  },
});
