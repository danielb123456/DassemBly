const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'yourDatabase',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  pool.query('SELECT * FROM posts', (error, results) => {
    if (error) {
        console.error("Database query error:", error)
        res.status(500).json({ error: 'Database error' });
    }
    else
        res.json(results);
  });
});

app.listen(PORT, () => {
  console.log("Server listening on port ${PORT}");
});
