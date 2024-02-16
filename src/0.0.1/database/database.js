async () => {
  const mysql = require('mysql2');

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      ca: process.env.DB_CA,
      key: process.env.DB_KEY,
      cert: process.env.DB_CERT,
    },
  });

  const executeQuery = (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, params, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  module.exports = {
    executeQuery,
  };
};
