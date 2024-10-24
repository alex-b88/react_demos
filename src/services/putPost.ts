import {IFormModel} from "../models/IFormModel";
import {axiosInstanse} from "./axiosInstanse";


export const putPost = (dataFromForm:IFormModel) => {
    const {title, body} = dataFromForm;
    axiosInstanse.post('posts', {
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.floor(Math.random() * 50) + 1,
        }),
    }, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },})
        .then((response) => console.log(response.status))
}