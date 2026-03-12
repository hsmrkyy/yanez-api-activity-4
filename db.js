const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // wait max 10s
      family: 4, // force IPv4
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB error:', error.message);
    process.exit(1); // stop app if DB fails
  }
};

module.exports = connectDB;
