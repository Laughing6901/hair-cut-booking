import { updateStatusBooking } from "../features/pages/homePage/bookingView/booking-dto";
import axiosClient from "./axios-client";

export const bookingApi = {
    getAllBooking: () => {
        let url = `bookings/bookingdetails`;
        return axiosClient.get(url);
    },
    getAllService: () => {
        let url = 'service';
        return axiosClient.get(url);
    },
    updateStatus: (params:updateStatusBooking) => {
        let url = `bookings/update`;
        return axiosClient.put(url, params);
    }
}
