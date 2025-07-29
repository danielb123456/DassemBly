import React from 'react';
import './styles/Board.css';
import Post from './Post.js';

function Board( {posts} ) {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    title={post.title}
                    content={post.content}
                    name={post.name}
                />
            ))}
        </div>
    );
}

export default Board;