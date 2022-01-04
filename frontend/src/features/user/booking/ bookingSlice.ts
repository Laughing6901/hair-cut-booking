import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { bookingForm, bookingState } from "./booking-dto";

export const bookingFunc = createAsyncThunk (
    'booking/bookingFunc', async(params:bookingForm, thunkApi ) => {

    }
)

const initialState:bookingState = {
    state:'idle',
    msg: '',
    bookingform: {
        contact: '',
        phone: '',
        stylist: '',
        service: [],
        description: '',
        start_time: null,
    }
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers:{
        addService: (state, action: PayloadAction<number>) => {
            console.log(action.payload);
            console.log("service: ",state.bookingform.service);
            
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(bookingFunc.pending, (state) => {
            state.state ='pending';
        })
        .addCase(bookingFunc.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(bookingFunc.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            state.msg = action.payload.message;
            //set data from data response from server
        })
    }
})

export const { reducer, actions } = bookingSlice;
// export const { addService } = actions;
export const selectBookingState = (state: RootState) => state.bookingState;
export default reducer;