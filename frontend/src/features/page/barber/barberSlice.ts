import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../api/page-api";
import { RootState } from "../../../app/store";
import { barberState } from "./barber-dto";

const initialState: barberState = {
    state: 'idle',
    msg: '',
    listBarber: [],
}

export const getBarber =createAsyncThunk(
    'Barber/getBarber', async(req, thunkApi) => {
        const response: any = await pageApi.getBarber();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const barberSlice = createSlice ({
    name: 'Barber',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getBarber.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getBarber.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getBarber.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listBarber = action.payload.data;
        })
    }
})

export const { reducer, actions } = barberSlice;
// export const { setTab } = actions;
export const selectBarberState = (state: RootState) => state.barberState;
export default reducer;

