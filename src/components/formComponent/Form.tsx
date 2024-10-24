import React from 'react';
import {useForm} from "react-hook-form";
import {IFormModel} from "../../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {formValidator} from "../../validators/formValidator";
import {putPost} from "../../services/putPost";

const Form = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormModel>({mode: 'all', resolver: joiResolver(formValidator)})

    const customHandler = (dataFromForm:IFormModel) => {
        putPost(dataFromForm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div><input type="text" {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </div>
                <div><textarea {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </div>
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
};

export default Form;