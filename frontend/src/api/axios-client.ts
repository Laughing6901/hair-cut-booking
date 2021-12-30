import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "localhost: 8000",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params =>  {
        let test = Object.values(params).join('/');
        console.log(test);
        
        return test;
    },
    data: (data:any) => JSON.stringify(data),
});

//Handle request infomation
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const token:any = sessionStorage.getItem("token");
    // if(token !== null){
    //     if(decodeToken.checkExpToken(token) === false) {
    //         config.headers = {
    //             Authorization: 'Bearer ' + sessionStorage.getItem("token"),
    //         }
    //     }
    // }
    return config;
});

//Handle response infomation
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response; 
}, (error) => {
    // Handle errorsÍ
    console.log("axiosClienterr(): ", error.response.data);
    // return reject(error);
    return error.response.data;
});

export default axiosClient;