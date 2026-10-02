import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
    addItem: (state, action)  => { 
        //modifying the state here
        state.items.push(action.payload);

    },
   removeItem: (state, action) => {
  state.items.splice(action.payload, 1);
},
    clearCart: (state) => {
        state.items.length = 0;
},
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
// we r taking this actions and exporting it so we can use them individually
export default cartSlice.reducer;
