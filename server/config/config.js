const { config } = require("dotenv");

config();

const env = {
  host: process.env.HOST,
  port: process.env.PORT,
  db_host: process.env.DB_HOST,
  db_port: +process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_user: process.env.DB_USER,
  db_database: process.env.DB_DATABASE,
};

module.exports = {
  env
};
