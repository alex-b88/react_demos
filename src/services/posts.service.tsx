import axios from "axios";
import {IResponseModel} from "../models/IResponseModel";
import {IPost} from "../models/IPost";

// export const getPosts = async (id:number):Promise<IPost[]> => {
//     let response: IPost[] = await fetch('https://dummyjson.com/posts/user/'+id)
//         .then(response => response.json())
//     return response.data;
// }

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/posts/user/',
    headers: {"Content-Type": "application/json"}
})

export const getPosts = async (id:number):Promise<IPost[]> => {
    let {data:{posts}} = await axiosInstance.get<IResponseModel & {posts: IPost[]}>(''+id);
    return posts;
}