const express = require('express');
const cors = require('cors');
const app = express();
const giftRoutes = require('./giftRoutes');
const searchRoutes = require('./searchRoutes');
const authRoutes = require('./authRoutes');

app.use(cors());
app.use(express.json());
app.use(giftRoutes);
app.use(searchRoutes);
app.use(authRoutes);

app.get('/api/search', (req, res, next) => next());

const PORT = process.env.PORT || 3060;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;