import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
    page: 'login',
}
export const authSlice = createSlice({
    name: 'AuthLayout',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string> ) => {
            state.page = action.payload;
        }
    },
})

export const { reducer, actions } = authSlice;
export const { setPage } = actions;
export const selectAuthPage = (state: RootState) => state.authLayoutState;
export default reducer;