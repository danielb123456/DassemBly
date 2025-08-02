import './App.css';
import React from 'react';
import AppHeader from './components/AppHeader.js';
import Board from './components/Board.js';
import Login from './components/Login.js';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [currentUser, setCurrentUser] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [form, setForm] = React.useState(
    { title: '', 
      content: '', 
      name: '', 
      image: '',
    });

  const handleCreatePost = () => {
    setShowForm(true);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {...form, id: uuidv4() };
    setPosts([newPost, ...posts]);
    setForm({ title: '', content: '', name: '', image: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  }

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  return (
    <>
      {!currentUser ? (
        <Login onLogin={handleLogin} />
      ) : (
      <div className="App">
        <AppHeader onCreatePost={handleCreatePost} />
        <h1>Welcome, {currentUser}</h1>
        <button onClick={() => setCurrentUser(null)} className="logoutButton">Logout</button>
        {showForm && (
          <form onSubmit={handleSubmit} className='post-form'>
            <input
              className ="title-input"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              className ="content-input"
              name="content"
              placeholder="How do you feel?"
              value={form.content}
              onChange={handleChange}
              required
            />
            <br />
            <input
              className = "name-input"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <br />
            <input
              className = "image-input"
              name="image"
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={handleChange}
              type="url"
            />
            <button type="submit" className="post-button">Post</button>
          </form>
        )}
        <Board posts={posts} onDelete={handleDelete} />
      </div>
    )}
  </>
  );
}

export default App;
