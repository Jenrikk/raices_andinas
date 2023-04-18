import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { raicesSlice } from "./raices";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        raices: raicesSlice.reducer,
    },
})