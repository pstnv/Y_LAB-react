import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_LOGIN_URL } from "../../constants/apiConstants";
import { setMessage } from "./messageSlice";

const initialState = {
    isLoading: false,
};

export const loginUser = createAsyncThunk(
    "user/login",
    async function loginUser(payload, thunkAPI) {
        try {
            const body = JSON.stringify(payload);
            const params = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body,
            };
            const res = await fetch(API_LOGIN_URL, params);
            const { msg } = await res.json();
            console.log(msg);
            if (Math.floor(res.status / 100) !== 2) {
                throw new Error(msg);
            }
            thunkAPI.dispatch(setMessage(msg));
        } catch (error) {
            console.log(error);
            const message =
                error.message || `Something went wrong. Try again later...`;
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const selectIsLoading = (state) => state.user.isLoading;

export default userSlice.reducer;
