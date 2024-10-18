import React from 'react';
import {useLocation} from "react-router-dom";
import Posts from "../components/posts/Posts";
import "./pages-styles/posts-page-styles.css"

const PostsPage = () => {
    const location = useLocation();
    const userInfo = location.state;

    return (
        <div className={"posts-container"}>
            <Posts user={userInfo}/>
        </div>
    );
};

export default PostsPage;