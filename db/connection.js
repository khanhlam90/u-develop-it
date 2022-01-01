const mysql = require('mysql2');

// Connect to database - moved from server.js
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Ucdbootcamp2022$',
      database: 'election'
    },
);

module.exports = db;