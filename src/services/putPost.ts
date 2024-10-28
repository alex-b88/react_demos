import {IFormModel} from "../models/IFormModel";
import {axiosInstanse} from "./axiosInstanse";


export const putPost = async (dataFromForm:IFormModel) => {
    const {title, body} = dataFromForm;

    return await axiosInstanse.post('posts/add', {
        headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                title: title,
                userId: 5,
                body: body
            })
        })
        .then(response => {return response})
}