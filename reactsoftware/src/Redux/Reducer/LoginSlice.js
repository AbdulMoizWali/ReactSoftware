import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        dummyData: "Testing.......",
    },
    reducers: {
        add(state, actions) {
            state.email = actions.payload.email;
            state.password = actions.payload.password;
        },
        del(state, actions) {},
    },
});

export const {add, del} = LoginSlice.actions;
export default LoginSlice.reducer;