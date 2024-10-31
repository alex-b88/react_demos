import React, {FC} from 'react';
import {IUserWithTokens} from "../../models/IUserWithTokens";
import UsersPosts from "../usersPosts/UsersPosts";

type Props = {
    user: IUserWithTokens;
}

const UserComponent: FC<Props> = ({user}) => {


    return (
        <>
            First Name: {user.firstName} <br/>
            Last Name: {user.lastName} <br/>
            Gender: {user.gender} <br/><br/>
            User's posts: <br/>
            <hr/>
            <UsersPosts user={user}/>
        </>
    );
};

export default UserComponent;