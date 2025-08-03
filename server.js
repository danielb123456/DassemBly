const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'duvet1234duvet5555duvet!!!',
  database: 'posts',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  const { title, content, poster } = req.body;

  const query = "INSERT INTO posts (title, content, poster) VALUES (?, ?, ?)";
  const values = [title, content, poster];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error("Database query error:", error)
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(201).json({ message: 'Post created successfully', postId: results.insertId});
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/posts', (req, res) => {
  const {title, content, poster } = req.body;
})