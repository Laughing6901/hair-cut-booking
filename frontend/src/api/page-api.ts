import { loginInfo } from "../features/auth/login/login-dto";
import { commentInfoRequest } from "../features/page/blog/comment/comment-dto";
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
    },
    getBlog: () => {
        let url = `blogs/`;
        return axiosClient.get(url);
    },
    getComment: () => {
        let url = `comment/`;
        return axiosClient.get(url);
    },
    postComment: (params: commentInfoRequest) => {
        let url = `comment/create`;
        return axiosClient.post(url, params);
    },
    getUser: () => {
        let url = `users`;
        return axiosClient.get(url);
    }
}
