// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/student');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Use the student routes
app.use('/api/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
