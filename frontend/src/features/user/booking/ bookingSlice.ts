import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookingApi } from "../../../api/booking-api";
import { RootState } from "../../../app/store";
import { bookingForm, bookingState, serviceBookingDetails, serviceBookingRequest } from "./booking-dto";

const initialState:bookingState = {
    state:'idle',
    msg: '',
    bookingform: {
        user_id: null,
        contact: '',
        phone: '',
        stylist: '',
        service: [],
        description: '',
        start_time: null,
    }
}

//create booking function
export const createBooking = createAsyncThunk (
    'booking/bookingFunc', async(params:bookingForm, thunkApi ) => {
        let {service, ...bookingInfoRequest} = params
        const response: any = await bookingApi.createBooking(bookingInfoRequest);
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        let serviceBookingDetails: serviceBookingDetails = {
            service: params.service,
            booking_id: response.booking.booking_id,
        }
        thunkApi.dispatch(createBookingDetail(serviceBookingDetails));
        thunkApi.dispatch(updateStylist(Number(params.stylist)));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const createBookingDetail = createAsyncThunk(
    'booking/createBookingDetails', async(params:serviceBookingDetails, thunkApi) => {
        params.service.map(async(item) => {
            let dataReq: serviceBookingRequest = {
                booking_id: params.booking_id,
                service_id: Number(item),
            }
            const response: any = await bookingApi.createBookingDetails(dataReq);
            if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
        // The value we return becomes the `fulfilled` action payload
        return response;    
        })
    }
)

export const updateStylist = createAsyncThunk(
    'booking/updateStylist', async(params: number, thunkApi) => {
        const response: any = await bookingApi.updateStylistStatus(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers:{
        addService: (state, action: PayloadAction<number>) => {
            console.log(action.payload);
            console.log("service: ",state.bookingform.service);
        },
        setInfomation: (state, action: PayloadAction<any>) => {
            state.bookingform.contact = action.payload.fullname;
            state.bookingform.phone = action.payload.phone;
            state.bookingform.user_id = action.payload.user_id;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createBooking.pending, (state) => {
            state.state ='pending';
        })
        .addCase(createBooking.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(createBooking.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            state.msg = action.payload.message;
            //set data from data response from server
        })
        //booking service
        .addCase(createBookingDetail.pending, (state) => {
            state.state ='pending';
        })
        .addCase(createBookingDetail.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(createBookingDetail.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            state.msg = action.payload.message;
            //set data from data response from server
        })
        .addCase(updateStylist.pending, (state) => {
            state.state ='pending';
        })
        .addCase(updateStylist.rejected, (state, action: PayloadAction<any>) => {
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(updateStylist.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            state.msg = action.payload.message;
            //set data from data response from server
            window.alert("đặt lịch thành công");
        })

    }
})

export const { reducer, actions } = bookingSlice;
export const { addService, setInfomation } = actions;
export const selectBookingState = (state: RootState) => state.bookingState;
export default reducer;