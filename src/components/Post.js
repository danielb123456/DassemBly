import React from 'react';
import '../styles/Post.css';

function Post({ title, content, name, id, image, onDelete }) {

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    
    const [showComments, setShowComments] = React.useState(false);
    const [comments, setComments] = React.useState([]);
    const [commentInput, setCommentInput] = React.useState('');
    const [commentName, setCommentName] = React.useState('');

    const [isEditing, setIsEditing] = React.useState(false);
    const [editedTitle, setEditedTitle] = React.useState(title);
    const [editedContent, setEditedContent] = React.useState(content);

    function handleAddComment(event) {
        event.preventDefault();
        if (commentInput.trim() !== '') {
            const newComment = {
                name: commentName.trim() == '' ? 'Anonymous' : commentName.trim(),
                text: commentInput.trim()
            };
            setComments([...comments, newComment]);
            setCommentInput('');
        }
    }

    return (
        <div className="post">
            {isEditing ? (
                <div className="editForm">
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="editTitleInput"
                    />
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="editContentInput"
                    />
                    <button
                        onClick={() => {
                            setIsEditing(false);
                        }}
                    >
                    Save
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="postTitle">{editedTitle}</h2>
                    <p className="postContent">{editedContent}</p>
                </>
            )}
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
                <button className="editButton" onClick={() => setIsEditing(true)}>Edit</button>
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
                    <form className="commentForm" onSubmit={handleAddComment}>
                        <input
                        type="text"
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        placeholder="Write a comment..."
                        />
                        <input
                        type="text"
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                        placeholder="Your name"
                        />
                        <button type="submit" className="commentButton">Add Comment</button>
                    </form>
                    <div className="commentsList">
                        {comments.map((comment, index) => (
                            <div className="comment" key={index}>
                                <span><i>"{comment.text}"</i> - <b>{comment.name}</b></span>
                            </div>
                    ))}
                    </div>
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