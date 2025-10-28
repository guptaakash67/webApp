const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Configure CORS
const corsOptions = {
  origin: function(origin, callback) {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://web-app-ten-theta.vercel.app'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

// Remove /api prefix since we're handling it in vercel.json
app.use('/auth', require('./routes/auth'));
app.use('/tasks', require('./routes/tasks'));
app.use('/profile', require('./routes/profile'));

app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));