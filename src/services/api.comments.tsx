import {IComment} from "../models/IComment";
import {axiosInstance} from "./axiosInstance"


export const getComments = async (id:number):Promise<IComment[]> => {
    try{
        const response = await axiosInstance.get<IComment[]>("/comments?postId="+id.toString());
        return response.data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}