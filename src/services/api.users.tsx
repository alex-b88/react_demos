import {IUser} from "../models/IUser";
import {axiosInstance} from "./axiosInstance"


export const getUsers = async (): Promise<IUser[]> => {
    try {
        const response = await axiosInstance.get<IUser[]>("users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}