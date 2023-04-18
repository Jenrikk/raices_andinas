import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { entriesSlice } from "./entries";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        raices: entriesSlice.reducer,
    },
})