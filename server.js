require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors(
  origin= 'https://todoapp-rdnr.onrender.com/'
));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todo_app';

// Mongoose v7+ — no more options required
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo connect error:', err));

app.get('/', (req, res) => res.send('API running'));

// Routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
