import React from 'react';
import {useForm} from "react-hook-form";
import {IFormModel} from "../../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {formValidator} from "../../validators/formValidator";
import {putPost} from "../../services/putPost";

const FormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormModel>({mode: 'all', resolver: joiResolver(formValidator)})

    const customHandler = (dataFromForm:IFormModel) => {
        const serverResponse = putPost(dataFromForm);
        console.log(serverResponse);
    }

    return (
        <div className={"form-container"}>
            <form onSubmit={handleSubmit(customHandler)}>
                <><input placeholder={"user name"} type="text" {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </>
                <><textarea placeholder={"post body"} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;