import React from 'react';
import {useLocation} from "react-router-dom";
import Comments from "../components/comments/Comments";

const CommentsPage = () => {
    const location = useLocation();
    const postInfo = location.state;

    return (
        <div className={"comments-container"}>
            <Comments post={postInfo}/>
        </div>
    );
};

export default CommentsPage;