import React, {useState} from 'react';
import {IUserWithTokens} from "../../models/IUserWithTokens";
import UserComponent from "../userComponent/UserComponent";
import LoginForm from "../loginForm/loginForm";

const LoginComponent = () => {

    const [user, setUser] = useState<IUserWithTokens | null>(null);


    return (
        <div className={"login-container"}>
            {user ? <UserComponent user={user}/> : <LoginForm/>}
        </div>
    );
};

export default LoginComponent;