import React from 'react';

import css from './Post.module.css'



const Post = ({post, click}) => {
    let {id, title} = post;
    return (
        <div className={css.Post}>
           <h2>{title}</h2>
            <p>№{id}</p>
            <button onClick={()=> click(id)}>More Info</button>
        </div>
    );
};

export {Post};