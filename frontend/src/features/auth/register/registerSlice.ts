import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../../api/auth-api";
import { RootState } from "../../../app/store";
import { registerInfo, registerState } from "./register-dto";

const initialState: registerState = {
    state: 'idle',
    msg: '',
}

export const registerFunction = createAsyncThunk(
    'Register/registerAccount', async(params:registerInfo, thunkApi) => {
        const response: any = await authApi.register(params);
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const registerSlice = createSlice({
    name: 'Register',
    initialState,
    reducers: {
    //    setTab: (state, action: PayloadAction<string>) => {
    //     state.tab = action.payload;
        
    //    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerFunction.pending, (state) => {
            state.state ='pending';
        })
        .addCase(registerFunction.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(registerFunction.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(action.payload.message);
        })
    }
})

export const { reducer, actions } = registerSlice;
// export const { setTab } = actions;
export const selectRegisterState = (state: RootState) => state.registerState;
export default reducer;