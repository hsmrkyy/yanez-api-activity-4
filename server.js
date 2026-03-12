require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.get(`${BASE_URI}/`, (req, res) => {
  res.send('Server is running with BASE_URI!');
});

app.use(`${BASE_URI}/auth`, require('./routes/authRoutes'));   // Register/Login
app.use(`${BASE_URI}/rooms`, require('./routes/roomRoutes'));  // Protected CRUD

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} with BASE_URI=${BASE_URI}`);
});
