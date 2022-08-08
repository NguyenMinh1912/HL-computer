import axios from "axios";

const BASE_URL = "";

axios.create({
    baseURL: BASE_URL
})

axios.interceptors.request.use(config => {
    return config;
})

export default axios;