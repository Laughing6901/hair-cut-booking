import axiosClient from "./axios-client";

export const bookingApi = {
    getAllBooking: () => {
        let url = `bookings/bookingdetails`;
        return axiosClient.get(url);
    },
    getAllService: () => {
        let url = 'service';
        return axiosClient.get(url);
    }
}
