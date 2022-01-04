import { bookingFormRequest } from "../features/user/booking/booking-dto";
import axiosClient from "./axios-client";

export const bookingApi = {
    createBooking: (params:bookingFormRequest) => {
        let url = `bookings/create`;
        return axiosClient.post(url, params);
    }
}
