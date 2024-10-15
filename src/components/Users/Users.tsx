import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../User/User";

// type IUsersProps = {
//     func:()=>void;
// }

const Users = () => {

    const getUserId = (id:number) =>{
        console.log(id);
    }

    let [usersList, setUsersList] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setUsersList(data.users);
            });
    }, []);

    return (
        <>
            {
                usersList.map((value: IUser) => <User key={value.id} user={value} getUserId={()=>{getUserId(value.id)}}/>)
            }
        </>
    );
};

export default Users;