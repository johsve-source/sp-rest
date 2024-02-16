const express = require('express');
const dotenv = require('dotenv');
const db = require('./src/0.0.1/database/database.js');
dotenv.config();

const app = express();

app.get('/data', async (req, res) => {
  try {
    const results = await db.executeQuery('SELECT * FROM sp-rest', []);
    res.json(results);
  } catch (error) {
    console.error(`Database query error: ${error.message}`);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
