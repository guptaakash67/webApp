const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Enable CORS for all origins during testing
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/profile', require('./routes/profile'));

app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));