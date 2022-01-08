import { loginInfo } from "../features/auth/login/login-dto";
import axiosClient from "./axios-client";



export const pageApi = {
    getCate: () => {
        let url = `categories/`;
        return axiosClient.get(url);
    },
    getService: () => {
        let url = `service/`;
        return axiosClient.get(url);
    },
    getBarber: () => {
        let url = `users/stylist`;
        return axiosClient.get(url);
    },
    getPortfolio: () => {
        let url = `gallery/`;
        return axiosClient.get(url);
    }
}
