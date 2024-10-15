import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../User/User";
import {IPost} from "../../models/IPost";
import {getUsers} from "../../services/users.service";
import {getPosts} from "../../services/posts.service";


const Users = () => {

    let [posts, setPosts] = useState<IPost[] | null>(null);
    const getUserId = (id:number) =>{
        getPosts(id)
            .then((response) => {
                setPosts(response);
                // console.log(response);
            })
    }


    let [usersList, setUsersList] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
            .then((response ) => {
                setUsersList(response)
                console.log(response);
            });
    }, []);

    return (
        <>
            <hr/>
            {
                posts?.map(post => <div key={post.id}>{post.title}</div>)
            }
            <hr/>
            {
                 usersList.map((value:IUser) => <User key={value.id} user={value} getUserId={()=>{getUserId(value.id)}}/>)
            }
        </>
    );
};

export default Users;