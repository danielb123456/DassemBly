import './App.css';
import React from 'react';
import AppHeader from './components/AppHeader.js';
import Board from './components/Board.js';
import Post from './components/Post.js';

function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [form, setForm] = React.useState({ title: '', content: '', name: '' });

  const handleCreatePost = () => {
    setShowForm(true);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([{ ...form }, ...posts]);
    setForm({ title: '', content: '', name: '' });
    setShowForm(false);
  };

  return (
    <div className="App">
      <AppHeader onCreatePost={handleCreatePost} />
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
          <button type="submit" className="post-button">Post</button>
        </form>
      )}
      <Board posts={posts} />
    </div>
  );
}

export default App;
