const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = dbConfig;
