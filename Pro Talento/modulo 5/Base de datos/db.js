// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/supermercado', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
