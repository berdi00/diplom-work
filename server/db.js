const Pool = require("pg").Pool;
const { env } = require("./config/config");

const pool = new Pool({
  user: env.db_user,
  password: env.db_password,
  host: env.db_host,
  port: env.db_port,
  database: env.db_database,
});

module.exports = pool;
