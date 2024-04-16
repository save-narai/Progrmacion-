const express = require('express');
const User = require('../models/user');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios.' });
  }
});

router.get('/:userId', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) throw new Error('Usuario no encontrado.');
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
