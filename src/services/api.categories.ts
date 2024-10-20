import {axiosInstance} from "./instance";
import {ICategory} from "../models/ICategory";

export const getCategories = async (): Promise<ICategory[]> => {
   try {
      const response = await axiosInstance.get<ICategory[]>("categories");
      return response.data;
   } catch (error) {
      console.error("Error fetching users:", error);
      return [];
   }
}