import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {ILoginModel} from "../../models/ILoginModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {LoginformValidator} from "../../validators/LoginformValidator";
import {login, refresh} from "../../services/axiosInstanse";
import {IUserWithTokens} from "../../models/IUserWithTokens";
import UserComponent from "../userComponent/UserComponent";
import {AxiosResponse} from "axios";

const LoginForm = () => {

    const [user, setUser] = useState<IUserWithTokens | null>(null)
    const {handleSubmit, register, formState:{errors, isValid}} = useForm<ILoginModel>({mode: 'all', resolver: joiResolver(LoginformValidator)});

    const customHandler = async (loginCredentials:ILoginModel) => {
        try{
            const returnedUser = await login(loginCredentials)
            setUser(returnedUser)
        } catch (e){
            let error = e as AxiosResponse
            alert(error.data.message)
            await refresh()
        }
    }

    return (
        <div>
            {
                user ? <UserComponent user={user}/>
                    : <form onSubmit={handleSubmit(customHandler)}>
                        <>
                            <input placeholder={"Username"} type="text" {...register('login')}/>
                            {errors.login && <div>{errors.login.message}</div>}
                        </>
                        <>
                            <input placeholder={"password"} type="password" {...register('password')}></input>
                            {errors.password && <div>{errors.password.message}</div>}
                        </>
                        <button disabled={!isValid}>login</button>
                        <br/>
                        <div>log: emmaj pass: emmajpass</div>
                    </form>
            }

        </div>
    );
};

export default LoginForm;