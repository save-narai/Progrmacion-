const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.contraseña, 10);
    const newUser = new User({
      ...req.body,
      contraseña: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ nombreUsuario: req.body.nombreUsuario });
    if (!user) throw new Error('Usuario no encontrado.');
    const isPasswordValid = await bcrypt.compare(req.body.contraseña, user.contraseña);
    if (!isPasswordValid) throw new Error('Contraseña incorrecta.');
    const token = jwt.sign({ userId: user._id }, 'secretkey');
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
