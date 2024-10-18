import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/api.posts";
import "./post-style.css"
import {Link} from "react-router-dom";
import {IUser} from "../../models/IUser";

type PostsProps = {
    user:IUser;
}

const Posts: FC<PostsProps> = ({user}) => {

    const [posts, setPosts] = useState<IPost[] | null>(null)
    useEffect(() => {
        getPosts(user.id).then((response) => {
            setPosts(response);
        })
    }, []);

    return (
        <>
            <div key={user.id} className={"user-data"}>
                <span><b>Name: </b><i>{user.name}</i>  <b>Username: </b><i>{user.username}</i>  <b>E-mail: </b><i>{user.email}</i></span>
                <span><b>Address:</b> <i>{user.address.street}  {user.address.suite}</i>  <i>{user.address.city}  {user.address.zipcode}</i></span>
                <span><b>Phone: </b><i>{user.phone}</i>  <b>Website: </b><i>{user.website}</i></span>
                <span><b>Company: </b></span>
                <span className={"user-address"}><i>{user.company.name}</i></span>
                <span className={"user-address"}><i>{user.company.bs}</i></span>
                <span className={"user-address"}><i>{user.company.catchPhrase}</i></span>
            </div>
            {
                posts?.map((post) => (
                    <div key={post.id} className={"post-info"}>
                        <span className={"post-title"}><b>Title: </b><i>{post.title}</i></span>
                        <span><b>Post:</b></span>
                        <span className={"post-body"}>{post.body}</span>
                        <div className={"btns-container"}>
                            <Link className={"btn"} to={`/`}>Back to users</Link>
                            <Link className={"btn"} to={`/comments`} state={post as IPost}>Show comments</Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Posts;