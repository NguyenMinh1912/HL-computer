import axios from "axios";

const BASE_URL = "http://localhost:8080";

const client = axios.create({
    baseURL: BASE_URL
})

client.interceptors.request.use(config => {
    return config;
})



export default client;