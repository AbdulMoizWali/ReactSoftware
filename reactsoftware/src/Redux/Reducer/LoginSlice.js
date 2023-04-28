import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        dummyData: "Testing.......",
    },
    reducers: {
        add(state, actions) {},
        del(state, actions) {},
    },
});

export const {add, del} = LoginSlice.actions;
export default LoginSlice.reducer;