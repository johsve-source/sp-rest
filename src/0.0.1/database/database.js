const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(helmet());

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
  ssl: {
    ca: process.env.DB_ca,
    key: process.env.DB_key,
    cert: process.env.DB_cert,
  },
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM rest-api', (error, results, fields) => {
    if (e) {
      console.error(`Database query error: ${e.message}`);
      res.status(500).send('Intrnal Server Error');
    } else {
      res.json(results);
    }
  });
});
