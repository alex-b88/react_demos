import React from 'react';
import './users-styles.css';
import {users} from "../../data";
import {IUserModel} from "../../models/user-model";
import User from "../user/user";

const Users = () => {
    return (
        <ul>
            {
                users.map(({name,age,status}: IUserModel)=> <li><User name={name} age={age} status={status}/></li>)
            }
        </ul>
    );
};

export default Users;