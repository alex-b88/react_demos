import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.users";
import "./user-styles.css"
import {Link} from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<IUser[] | null>(null)

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response);
        })
    }, []);

    return (
        <>
            {
                users?.map((user) => (
                    <div key={user.id} className={"user-info"}>
                        <span><b>Name: </b><i>{user.name}</i></span>
                        <span><b>Username: </b><i>{user.username}</i></span>
                        <span><b>E-mail: </b><i>{user.email}</i></span>
                        <span><b>Address:</b></span>
                        <span className={"user-address"}><i>{user.address.street} {user.address.suite}</i></span>
                        <span className={"user-address"}><i>{user.address.city} {user.address.zipcode}</i></span>
                        <span><b>Phone: </b><i>{user.phone}</i></span>
                        <span><b>Website: </b><i>{user.website}</i></span>
                        <span><b>Company: </b></span>
                        <span className={"user-address"}><i>{user.company.name}</i></span>
                        <span className={"user-address"}><i>{user.company.bs}</i></span>
                        <span className={"user-address"}><i>{user.company.catchPhrase}</i></span>
                        <Link className={"show-posts"} to={`/posts`} state={user as IUser}>Show posts</Link>
                    </div>
                ))
            }
        </>
    );
};

export default Users;