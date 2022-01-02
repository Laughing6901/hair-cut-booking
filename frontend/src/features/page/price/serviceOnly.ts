import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../api/page-api";
import { RootState } from "../../../app/store";
import { listServiceOnly, serviceOnlyState } from "./serviceOnly-dto";

export const getAllService = createAsyncThunk(
    'service/getAllService', async(req, thunkApi) => {
        const response: any = await pageApi.getService();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

const initialState:serviceOnlyState = {
    state: 'idle',
    msg: '',
    serviceOnly: [],
}

export const serviceOnlySlice = createSlice({
    name:'service',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllService.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getAllService.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(getAllService.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            state.msg = action.payload.message;
            //set data from data response from server
            state.serviceOnly = action.payload.data;
        })
    }

})

export const { reducer, actions } = serviceOnlySlice;
// export const { setTab } = actions;
export const selectServiceState = (state: RootState) => state.serviceState;
export default reducer;