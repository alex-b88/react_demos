import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IUserProps = {
    user: IUser
    getUserId: (id:number) => void;
};

const User: FC<IUserProps> = ({user, getUserId}) => {
    return (
        <div key={user.id}>
            {user.firstName}
            {user.lastName}
            {user.age}
            {user.gender}
            <button onClick={() =>{
                getUserId(user.id);
            }}>
                Show {user.firstName}'s posts
            </button>
        </div>
    );
};

export default User;