import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../User/User";

const Users = () => {

    let[usersList, setUsersList] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setUsersList(data.users);
                console.log(usersList);

            });
    }, []);

    return (
        <div>
            {
                usersList.map((value: IUser) => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;