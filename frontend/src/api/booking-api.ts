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
    },
    getUserBooking: (id: number)  => {
        let url = `bookings/userbooking/${id}`;
        return axiosClient.get(url);
    },
    sendPreview: (params: any) => {
        let url = `bookings/previewbooking/${params.booking_id}`;
        return axiosClient.put(url, params);
    }
}
