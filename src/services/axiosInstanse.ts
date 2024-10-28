import axios from 'axios';

export const axiosInstanse = axios.create({
    baseURL: 'https://dummyjson.com',
});