import React from 'react';

const PostDetails = ({postDetails}) => {
    const {id, title, userId, body} = postDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>body: {body}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {PostDetails};