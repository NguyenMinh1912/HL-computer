import axios from "axios";
import authenticateService from "../services/AuthenticateService";
import {toast} from "react-toastify";

const BASE_URL = "http://localhost:8080";

const client = axios.create({
    baseURL: BASE_URL
})

client.interceptors.request.use((config) => {
        const token = authenticateService.getToken();

        if (config?.headers && token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (err) => {
        const status = err.response.status;
        console.log(status);
        if(status === 400) {
            toast.error("Bad request")
        }
        if(status === 500){
            toast.error("Lỗi server")
        }
    }
)


export default client;