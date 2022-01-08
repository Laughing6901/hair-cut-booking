import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../api/page-api";
import { RootState } from "../../../app/store";
import { portfolioState } from "./portfolio-dto";

const initialState: portfolioState = {
    state: 'idle',
    msg: '',
    listPortfolio: [],
}

export const getPortfolio =createAsyncThunk(
    'Portfolio/getPortfolio', async(req, thunkApi) => {
        const response: any = await pageApi.getPortfolio();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const portfolioSlice = createSlice ({
    name: 'Portfolio',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPortfolio.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getPortfolio.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getPortfolio.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listPortfolio = action.payload.data.rows;
        })
    }
})

export const { reducer, actions } = portfolioSlice;
// export const { setTab } = actions;
export const selectPortfolioState = (state: RootState) => state.portfolioState;
export default reducer;

