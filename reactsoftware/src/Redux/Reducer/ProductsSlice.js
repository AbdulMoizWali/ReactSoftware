import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name: "Products",
    initialState:[],
    reducers: {
        add(state, action) {
           state.push(action.payload);
        },
        del(state, actions) {},
    },
});

export const {add, del} = ProductsSlice.actions;
export default ProductsSlice.reducer;