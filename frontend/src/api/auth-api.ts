import { loginInfo } from "../features/auth/login/login-dto";
import axiosClient from "./axios-client";



export const authApi = {
    login: (params:loginInfo) => {
        let url = `users/login`;
        return axiosClient.post(url, params);
    }
}
