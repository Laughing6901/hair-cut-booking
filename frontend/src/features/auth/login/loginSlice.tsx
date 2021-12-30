import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../../api/auth-api";
import { RootState } from "../../../app/store";
import { loginInfo, loginState } from "./login-dto";

const initialState: loginState = {
    state: 'idle',
    errMsg: '',
    token: '',
}

export const loginFunction = createAsyncThunk(
    'Login/loginFunc', async(params:loginInfo, thunkApi) => {
        const response: any = await authApi.login(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setLoginInfo(params));
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
            state.errMsg = action.payload;
            window.alert(state.errMsg);
        })
        .addCase(loginFunction.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.token = action.payload.Token.accessToken;
        })
    }
})

export const { reducer, actions } = loginSlice;
// export const { setTab } = actions;
export const selectLoginState = (state: RootState) => state.loginState;
export default reducer;