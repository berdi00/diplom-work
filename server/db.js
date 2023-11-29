const Pool = require("pg").Pool;
const { env } = require("./config/config");

const pool = new Pool({
  user: env.db_user,
  database: env.db_database,
});

module.exports = pool;
