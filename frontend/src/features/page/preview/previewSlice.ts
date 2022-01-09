import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookingApi } from "../../../api/booking-api";
import { RootState } from "../../../app/store";
import { previewState } from "./preview-dto";

const initialState: previewState = {
    state: 'idle',
    msg: '',
    listPreview: [],
}

export const getPreview =createAsyncThunk(
    'Preview/getPreview', async(params: number, thunkApi) => {
        const response: any = await bookingApi.getUserBooking(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const sendPreview =createAsyncThunk(
    'Preview/sendPreview', async(params: any, thunkApi) => {
        const response: any = await bookingApi.sendPreview(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const previewSlice = createSlice ({
    name: 'Preview',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPreview.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getPreview.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getPreview.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listPreview = action.payload.booking;
        })
        .addCase(sendPreview.pending, (state) => {
            state.state ='pending';
        })
        .addCase(sendPreview.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(sendPreview.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
        })
    }
})

export const { reducer, actions } = previewSlice;
// export const { setTab } = actions;
export const selectPreviewState = (state: RootState) => state.previewState;
export default reducer;

