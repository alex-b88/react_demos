import axios from 'axios';

export const axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});