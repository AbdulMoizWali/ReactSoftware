import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "Products",
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

export const {add, del} = ProductSlice.actions;
export default ProductSlice.reducer;