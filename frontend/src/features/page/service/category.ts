import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../api/page-api";
import { RootState } from "../../../app/store";
import { serviceState } from './service-dto';

export const getCategories = createAsyncThunk(
    'categories/getCategories', async(req, thunkApi) => {
        const response: any = await pageApi.getCate();
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

export const categorySlice = createSlice({
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
        })
    }
})


export const { reducer, actions } = categorySlice;
// export const { setTab } = actions;
export const selectCategoryState = (state: RootState) => state.categoryState;
export default reducer;