import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens";
import {ILoginModel} from "../models/ILoginModel";
import {IResponse} from "../models/IResponse";
import {IPost} from "../models/IPost";
import {retriveLocalStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPair";

export const axiosInstanse = axios.create({
    baseURL: 'https://dummyjson.com',
});

const login = async (loginCredentials: ILoginModel): Promise<IUserWithTokens> => {
    let {data:userWithTokens} = await axiosInstanse.post('auth/login', {
        username: loginCredentials.login,
        password: loginCredentials.password,
        expiresInMins: 1
    });

    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

axiosInstanse.interceptors.request.use(request => {
    if(request?.method?.toUpperCase() === 'POST') {
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
})


const refresh = async() => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data} = await axiosInstanse.post<ITokenPair>('refresh', {
        refreshToken: retriveLocalStorage<IUserWithTokens>('user').refreshToken,
        expiresInMins: 2,
    });
    iUserWithTokens.refreshToken = data.refreshToken
    iUserWithTokens.accessToken = data.accessToken

    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}


const getPosts = async (user: IUserWithTokens): Promise<IPost[]> => {
    let {data} = await axiosInstanse.get<IResponse & {posts: IPost[]}>(`auth/posts/user/${user.id}`, {
        headers: {
            Authorization: 'Bearer ' + user.accessToken
        }
    })
    return data.posts
}

export {login, getPosts, refresh}