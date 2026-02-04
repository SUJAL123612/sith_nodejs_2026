const { MongoClient } = require('mongodb');
require('dotenv').config();

// const url = 'mongodb://localhost:27017';
// const url = 'mongodb://127.0.0.1:27017';
const url = process.env.MG_HOST;
const client = new MongoClient(url);

// database name
const dbName = process.env.MG_DATABASE;

client.connect()
  .then(() => {
    console.log("MongoDB connected successfully..");
    client.dbInstance = client.db(dbName);
  })
  .catch(err => {
    console.error("Connection error:", err);
  });
  
client.db(dbName);

module.exports= client;