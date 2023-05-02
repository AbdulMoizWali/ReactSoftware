import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Reducer/LoginSlice";
import ProductsSlice from "../Reducer/ProductsSlice";

const Store = configureStore({
    reducer: {
        Login: LoginSlice,
        Products: ProductsSlice,
    }
});

export default Store;