import React from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

export interface userInfo {
    user_id: number,
    fullname: string,
    email: string,
    phone: string,
    avatar: string,
    address: string,
}

export interface userState {
    state: 'idle' | 'failed' | 'pending',
    userInfo: userInfo
}

const initialState:userState = {
    state: 'idle',
    userInfo: {
        user_id: 0,
        fullname: '',
        email: '',
        phone: '',
        avatar: '',
        address: '',
    }
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<any>) => {
            state.userInfo = action.payload;
        }
    }
})

export const { reducer, actions } = userInfoSlice;
export const { setAccount } = actions;
export const selectUserInfo = (state: RootState) => state.userInfo;
export default reducer;