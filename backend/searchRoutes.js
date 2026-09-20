const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

router.get('/api/search', async (req, res) => {
  const db = await connectToDatabase();
  const category = req.query.category;
  const results = await db.collection('gifts').find({ category: category }).toArray();
  res.json(results);
});

module.exports = router;