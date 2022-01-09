import React from "react";
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";
import { pageApi } from "../../api/page-api";

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
    userInfo: userInfo,
    listUser: userInfo[],
}

const initialState:userState = {
    state: 'idle',
    listUser: [],
    userInfo: {
        user_id: 0,
        fullname: '',
        email: '',
        phone: '',
        avatar: '',
        address: '',
    }
}

export const getAllUser =createAsyncThunk(
    'user/getAllUser', async(req, thunkApi) => {
        const response: any = await pageApi.getUser();
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<any>) => {
            state.userInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUser.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getAllUser.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
        })
        .addCase(getAllUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.listUser = action.payload.data.rows;
        })
    }
})

export const { reducer, actions } = userInfoSlice;
export const { setAccount } = actions;
export const selectUserInfo = (state: RootState) => state.userInfo;
export default reducer;