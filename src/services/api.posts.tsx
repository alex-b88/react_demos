import {IPost} from "../models/IPost";
import axios from "axios";

export const getPosts = async (id:number):Promise<IPost[]> => {
    try{
        const response = await axios.get<IPost[]>("users/"+id+"posts");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}