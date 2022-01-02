import { loginInfo } from "../features/auth/login/login-dto";
import axiosClient from "./axios-client";



export const bookingApi = {
    booking: (params:loginInfo) => {
        let url = `booking`;
        return axiosClient.post(url, params);
    }
}
