import React from 'react';
import '../styles/Board.css';
import Post from './Post.js';

function Board( {posts, onDelete} ) {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    name={post.name}
                    id={post.id}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default Board;