import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../api/page-api";
import { RootState } from "../../../app/store";
import { serviceState } from './service-dto';

export const getCategories = createAsyncThunk(
    'categories/getCategories', async(req, thunkApi) => {
        const response: any = await pageApi.getCate();
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

const initialState: serviceState  = {
    state: 'idle',
    categories: [],
    errMsg: '',
};

export const serviceSlice = createSlice({
    name:'categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state) => {
            // state.state ='pending';
        })
        .addCase(getCategories.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.errMsg = action.payload;
        })
        .addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            state.errMsg = action.payload.message;
            //set data from data response from server
            state.categories = action.payload.data;
            console.log(state.categories);
        })
    }
})


export const { reducer, actions } = serviceSlice;
// export const { setTab } = actions;
export const selectServiceState = (state: RootState) => state.serviceState;
export default reducer;