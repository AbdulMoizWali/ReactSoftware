import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Reducer/LoginSlice";

const Store = configureStore({
    reducer: {
        Login: LoginSlice,
    }
});

export default Store;