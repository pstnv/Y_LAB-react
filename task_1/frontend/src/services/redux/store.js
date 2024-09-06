import { configureStore } from "@reduxjs/toolkit";
import { messageSlice, userSlice } from "./slices";

const store = configureStore({
    reducer: {
        user: userSlice,
        message: messageSlice,
    },
});

export default store;
