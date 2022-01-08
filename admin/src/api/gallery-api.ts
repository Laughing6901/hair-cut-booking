import { galleryInfoRequest } from "../features/pages/gallery/gallery-dto";
import axiosClient from "./axios-client";

export const galleryApi = {
    getGallery: () => {
        let url = `gallery/`;
        return axiosClient.get(url);
    },
    createGallery: (params: any) => {
        let url = `gallery/create`;
        return axiosClient.post(url, params);
    },
    deleteGallery: (params: any) => {
        let url = `gallery/delete/${params}`;
        return axiosClient.delete(url);
    }
}
