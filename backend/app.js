// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/student');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
