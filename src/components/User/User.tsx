import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IUserProps = {user:IUser};

const User: FC<IUserProps> = ({user}) => {
    return (
        <div key={user.id}>{user.firstName} {user.lastName} {user.age} {user.gender}</div>
    );
};

export default User;