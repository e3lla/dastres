import { configureStore } from "@reduxjs/toolkit";

const defaultReducer = (state = {}, action) => state;

export const store = configureStore({
    reducer: {
        app: defaultReducer
    },
});