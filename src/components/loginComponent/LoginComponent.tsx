import React from 'react';
import {useForm} from "react-hook-form";
import {ILoginModel} from "../../models/ILoginModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {LoginformValidator} from "../../validators/LoginformValidator";

const LoginComponent = () => {

    const {handleSubmit, register, formState:{errors, isValid}} = useForm<ILoginModel>({mode: 'all', resolver: joiResolver(LoginformValidator)});

    const customHandler = async (loginCredentials:ILoginModel) => {

    }

    return (
        <div className={"login-container"}>
            <form onSubmit={handleSubmit(customHandler)}>
                <>
                    <input placeholder={"Username"} type="text" {...register('login')}/>
                    {errors.login && <div>{errors.login.message}</div>}
                </>
                <>
                    <input placeholder={"password"} type="password" {...register('password')}></input>
                    {errors.password && <div>{errors.password.message}</div>}
                </>
                <button disabled={!isValid}>login</button>
            </form>
            
        </div>
    );
};

export default LoginComponent;