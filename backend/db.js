const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectToDatabase() {
  if (db) return db;
  await client.connect();
  db = client.db('giftdb');
  console.log("Connected to MongoDB");
  return db;
}

module.exports = { connectToDatabase };