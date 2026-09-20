const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/api/auth/register', async (req, res) => {
  const db = await connectToDatabase();
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.collection('users').insertOne({ email, password: hashedPassword });
  res.status(201).json({ message: "User registered" });
});

router.post('/api/auth/login', async (req, res) => {
  const db = await connectToDatabase();
  const { email, password } = req.body;
  const user = await db.collection('users').findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token });
});

module.exports = router;