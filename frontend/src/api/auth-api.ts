import { loginInfo } from "../features/auth/login/login-dto";
import axiosClient, { REACT_APP_SERVER_URL } from "./axios-client";


export const authApi = {
    login: (params:loginInfo) => {
        let url = `${REACT_APP_SERVER_URL}/users`;
        return axiosClient.post(url, params);
    }
}