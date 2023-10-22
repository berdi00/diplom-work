const Pool = require('pg').Pool;
const { env } = require('./config/config')

const pool = new Pool({
    user: env.db_user,
    host: env.db_host,
    database: env.db_database,
    password: env.db_password,
    port: env.db_port,
});

module.exports = pool;
