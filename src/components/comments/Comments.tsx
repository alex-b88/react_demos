import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getComments} from "../../services/api.comments";
import {IComment} from "../../models/IComment";
import {useNavigate} from "react-router-dom";
import "../posts/post-style.css"
import "./comments-style.css"

type CommentsProps = {
    post: IPost;
}

const Comments: FC<CommentsProps> = ({post}) => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const goMain = () => {
        navigate('/');
    };

    const [comments, setComments] = useState<IComment[] | null>(null)
    useEffect(() => {
        getComments(post.id).then((response)=>{
            setComments(response);
        })
    }, []);

    return (
        <>
            <div key={post.id} className={"post-info"}>
                <span className={"post-title"}><b>Title: </b><i>{post.title}</i></span>
                <span><b>Post:</b></span>
                <span className={"post-body"}>{post.body}</span>
                <div className={"btns-container"}>
                    <button className={"btn"} onClick={goBack}>Back to post</button>
                    <button className={"btn"} onClick={goMain}>Back to users</button>
                </div>
            </div>

            <div className={"comments-container"}>
                {
                    comments?.map((comment) => (
                        <div key={comment.id} className={"comment"}>
                            <span><b>Author: </b><i>{comment.name}</i></span>
                            <span><b>Contact: </b><i>{comment.email}</i></span>
                            <span className={"comment-body"}>{comment.body}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Comments;