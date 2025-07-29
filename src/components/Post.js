import React from 'react';
import './styles/Post.css';

function Post({ title, content, name}) {
    return (
        <div className="post">
            <h2 className="postTitle">{title}</h2>
            <p className="postContent">{content}</p>
            <div className="postFooter">
                <span className="postName">{name}</span>
            </div>
        </div>
    );
}

export default Post;