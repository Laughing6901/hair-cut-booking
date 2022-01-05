import { bookingFormRequest, serviceBookingRequest } from "../features/user/booking/booking-dto";
import axiosClient from "./axios-client";

export const bookingApi = {
    createBooking: (params:bookingFormRequest) => {
        let url = `bookings/create`;
        return axiosClient.post(url, params);
    },
    createBookingDetails: (params: serviceBookingRequest) => {
        let url = 'booking-details/create';
        return axiosClient.post(url, params);
        
    },
    updateStylistStatus: (params:number) => {
        let url = 'users/stylist/' + params
        let reqBody = {
            status:0
        }
        return axiosClient.put(url, reqBody);
    }
}
