import axios from "axios";
import authenticateService from "../services/AuthenticateService";

const BASE_URL = "http://localhost:8080";

const client = axios.create({
    baseURL: BASE_URL
})

client.interceptors.request.use(config => {
    const token = authenticateService.getToken();
    if (config?.headers && token) {
        config.headers.Authorization = token;
    }
    return config;
})


export default client;