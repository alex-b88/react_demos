import {IFormModel} from "../models/IFormModel";
import {axiosInstanse} from "./axiosInstanse";


export const putPost = async (dataFromForm:IFormModel): Promise<number> => {
    const {title, body} = dataFromForm;

    return await axiosInstanse.post('posts', {
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.floor(Math.random() * 50) + 1,
        }),
    }, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },})
        .then(response => {return response.status})
}