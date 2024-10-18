import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import UserPostsLayOut from "../layouts/UserPostsLayOut";
import PostCommentsLayOut from "../layouts/PostCommentsLayOut";

export let routers = createBrowserRouter([
    {index: true, element: <MainLayOut/>},
    {path: 'posts', element: <UserPostsLayOut/>},
    {path: 'comments', element: <PostCommentsLayOut/>},
])