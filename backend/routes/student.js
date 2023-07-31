const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { name, dob, course, year, age } = req.body;
  const query = 'INSERT INTO students (name, dob, course, year, age) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, dob, course, year, age], (err) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Error saving student record' });
    } else {
      fetchStudents(res);
    }
  });
});

router.get('/', (_, res) => {
  fetchStudents(res);
});

function fetchStudents(res) {
  const query = 'SELECT * FROM students';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Error fetching student records' });
    } else {
      res.json(results);
    }
  });
}

module.exports = router;
