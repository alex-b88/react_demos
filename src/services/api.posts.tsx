import {IPost} from "../models/IPost";
import {axiosInstance} from "./axiosInstance"

export const getPosts = async (id:number):Promise<IPost[]> => {
    try{
        const response = await axiosInstance.get<IPost[]>("posts?userId="+id.toString());
        return response.data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}