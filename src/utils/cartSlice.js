import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
      // console.log(action.payload);
      // console.log(state.items);
      // const items = state.items.filter(
      //   (item) => item?.card?.info?.id != action?.payload?.card?.info?.id
      // );
      // console.log(items);
      // return items;
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
