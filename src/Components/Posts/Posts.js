import React, {useEffect, useState} from 'react';

import css from './Posts.module.css'
import {Post} from "../Post/Post";
import {postsService} from "../../services/postsService";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [Posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    const click = async (userId) => {
        const {data} = await postsService.getById(userId);
        setPostDetails(data);
    }

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            <div className={css.Posts}>
                {Posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {Posts};