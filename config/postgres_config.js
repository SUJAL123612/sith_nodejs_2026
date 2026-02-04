const { Client } = require("pg");
require('dotenv').config();

const client = new Client({
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
});

client.connect((err) => {
  if (err) {
    console.error("Connection error:", err.stack);
  } else {
    console.log("Postgres connected successfully..");
  }
});


module.exports = client;