import axios from "axios";
const instance = axios.create({
    baseURL: 'https://www.omdbapi.com'
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axios