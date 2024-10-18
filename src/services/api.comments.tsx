import {IComment} from "../models/IComments";
import axios from "axios";


export const getComments = async (id:number):Promise<IComment[]> => {
    try{
        const response = await axios.get<IComment[]>("posts/"+id+"comments");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}