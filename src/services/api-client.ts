import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dff0294ce2d54d8da8d7482af9c07f89'
    }
})