const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/cine-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

