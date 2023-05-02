import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        
    },
    reducers: {
        add(state, actions) {
            state.title = actions.payload.title;
            state.image = actions.payload.image;
            state.category = actions.payload.category;
            state.price = actions.payload.price;
        },
        del(state, actions) {},
    },
});

export const {add, del} = CartSlice.actions;
export default CartSlice.reducer;