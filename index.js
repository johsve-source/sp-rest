const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = process.env.PORT || 3001;

app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
