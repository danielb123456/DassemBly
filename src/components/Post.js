import React from 'react';
import '../styles/Post.css';

function Post({ title, content, name, id, image, onDelete }) {

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    
    const [showComments, setShowComments] = React.useState(false);
    const [comments, setComments] = React.useState([]);
    const [commentInput, setCommentInput] = React.useState('');

    function handleAddComment() {
        if (commentInput.trim() !== '') {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    }

    return (
        <div className="post">
            <h2 className="postTitle">{title}</h2>
            <p className="postContent">{content}</p>
            {image && <img src={image} alt="Image Failed to Load :(" className="postImage" />}
            <div className="postFooter">
                <span className="supportPercentage">
                    Public Reaction
                    <br />
                    {((likes + dislikes) === 0 
                        ? 50
                        : (100 * likes / (likes + dislikes))
                    ).toFixed(2)}% 👍
                </span>
                <button className="likeButton" onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
                <button className="dislikeButton" onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
                <button className="deleteButton" onClick={() => setShowDeleteModal(true)}>
                    Delete
                </button>
                <button className="commentButton" onClick={() => setShowComments(true)}>
                    {showComments ? 'Hide Comments' : 'Show Comments'}
                </button>
                <span className="postName">{name}</span>
            </div>

            {showComments && (
                <div className="commentSection">
                    <h3>Comments</h3>
                    <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Write a comment..."
                    />
                    <button onClick={handleAddComment}>Add Comment</button>
                    <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                    </ul>
                </div>
            )}

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