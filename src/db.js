// Hele db.js er skrevet av KI

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres'
});

module.exports = pool;