import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookingApi } from "../../../../api/booking-api";
import { RootState } from "../../../../app/store";
import { bookingState } from "./booking-dto";


const initialState:bookingState = {
    state:'idle',
    msg: '',
    listBookingInfo: [],
}

export const getBooking = createAsyncThunk(
    'booking/getBooking', async(params, thunkApi) => {
        const response: any = await bookingApi.getAllBooking();
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const BookingSlice = createSlice({
    name:'booking',
    initialState,
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder
        .addCase(getBooking.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getBooking.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getBooking.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listBookingInfo = action.payload.data.rows;
            console.log(state.listBookingInfo);
        })
    } 
})

export const { reducer, actions } = BookingSlice;
// export const { setToken} = actions;
export const selectBookingState = (state: RootState) => state.booking;
export default reducer;