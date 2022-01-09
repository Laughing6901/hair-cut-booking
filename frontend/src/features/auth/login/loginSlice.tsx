import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../../api/auth-api";
import { RootState } from "../../../app/store";
import { getPreview } from "../../page/preview/previewSlice";
import { setInfomation } from "../../user/booking/ bookingSlice";
import { setAccount } from "../../user/userInfo";
import { loginInfo, loginState } from "./login-dto";

const initialState: loginState = {
    state: 'idle',
    msg: '',
}

export const loginFunction = createAsyncThunk(
    'Login/loginFunc', async(params:loginInfo, thunkApi) => {
        const response: any = await authApi.login(params);
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        thunkApi.dispatch(getUserInfomation(response.Id));
        thunkApi.dispatch(getPreview(response.Id));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const getUserInfomation = createAsyncThunk(
    'Login/getUserInfo', async(params: number, thunkApi) => {
        const response: any = await authApi.getUserInfo(params);
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        thunkApi.dispatch(setAccount(response.user));
        thunkApi.dispatch(setInfomation(response.user));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
    //    setTab: (state, action: PayloadAction<string>) => {
    //     state.tab = action.payload;
        
    //    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginFunction.pending, (state) => {
            state.state ='pending';
        })
        .addCase(loginFunction.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(loginFunction.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(action.payload.message);
            sessionStorage.setItem("token",action.payload.Token.accessToken);
        })
        
        .addCase(getUserInfomation.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getUserInfomation.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getUserInfomation.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
        })
    }
})

export const { reducer, actions } = loginSlice;
// export const { setTab } = actions;
export const selectLoginState = (state: RootState) => state.loginState;
export default reducer;