const { EILSEQ } = require('constants');

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'modangan123',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
