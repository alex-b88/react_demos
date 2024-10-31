import {IFormModel} from "../models/IFormModel";
import {axiosInstanse} from "./axiosInstanse";


export const putPost = async (dataFromForm:IFormModel) => {
    const {title, body} = dataFromForm;

    return await axiosInstanse.post('posts/add', {
        title: title,
        userId: 5,
        body: body})
        .then(response => {return response.status})
}