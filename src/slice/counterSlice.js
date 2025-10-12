import { createSlice } from "@reduxjs/toolkit";
// import AddToCard from "../Pages/AddToCard";
const saveduser=JSON.parse(localStorage.getItem("cart")|| "[]")
const initialState = {
  items: saveduser,
};

export const cartSlice = createSlice({
  name: "addToCard",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.items[itemIndex].qty > 1) {
          state.items[itemIndex].qty -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCard, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
