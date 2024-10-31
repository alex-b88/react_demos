import React, {FC, useEffect, useState} from 'react';
import {IUserWithTokens} from "../../models/IUserWithTokens";
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/axiosInstanse";

type IUserPostsProps = {
    user:IUserWithTokens;
}

const UsersPosts: FC<IUserPostsProps> = ({user}) => {
    const [postsList, setPostsList] = useState<IPost[]>([])

    useEffect(() => {
        getPosts(user).then(posts => setPostsList(posts))
    }, []);

    return (
        <div>
            {
                postsList.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default UsersPosts;