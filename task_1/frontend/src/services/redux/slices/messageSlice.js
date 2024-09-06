import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    isToasting: false,
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            return {
                message: action.payload,
                isToasting: true,
            };
        },
        clearMessage: () => {
            return initialState;
        },
    },
});

export const { setMessage, clearMessage } = messageSlice.actions;

export const selectMessage = (state) => state.message.message;
export const selectIsToasting = (state) => state.message.isToasting;

export default messageSlice.reducer;
