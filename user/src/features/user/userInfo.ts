import React from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

const initialState = {
    Account: '',
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<string>) => {
            state.Account = action.payload;
        }
    }
})

export const { reducer, actions } = userInfoSlice;
export const { setAccount } = actions;
export const selectUserInfo = (state: RootState) => state.userInfo;
export default reducer;