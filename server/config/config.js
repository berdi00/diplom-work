const { config } = require("dotenv");

config();

const env = {
  host: process.env.HOST,
  port: process.env.PORT,
  db_user: process.env.DB_USER,
  db_database: process.env.DB_DATABASE,
};

module.exports = {
  env,
};
