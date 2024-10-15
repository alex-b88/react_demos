import {IUser} from "../models/IUser";
import axios from "axios";
import {IResponseModel} from "../models/IResponseModel";

// export const getUsers =async ():Promise<IUser[]> => {
//     let response:IUser[] = await fetch('https://dummyjson.com/users')
//         .then(data => data.json())
//     return response;
// }

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
})

export const getUsers = async ():Promise<IUser[]> => {
    let {data:{users}} = await axiosInstance.get<IResponseModel & {users: IUser[]}>('/users');
    return users;
}