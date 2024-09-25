import { configureStore } from "@reduxjs/toolkit";
import { schoolSlice } from "./store";

export const store = configureStore({
    reducer: {
       school: schoolSlice.reducer
    }
})