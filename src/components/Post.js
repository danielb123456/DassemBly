import React from 'react';
import '../styles/Post.css';

function Post({ title, content, name, id, onDelete }) {
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);

    return (
        <div className="post">
            <h2 className="postTitle">{title}</h2>
            <p className="postContent">{content}</p>
            <div className="postFooter">
                <button className="deleteButton" onClick={() => setShowDeleteModal(true)}>
                    Delete
                </button>
                <span className="postName">{name}</span>
            </div>

            {showDeleteModal && (
                <div className="modalContent">
                    <p>Are you sure you want to delete this post?</p>
                    <button onClick={() => { onDelete(id); setShowDeleteModal(false); }}>Yes, delete</button>
                    <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default Post;