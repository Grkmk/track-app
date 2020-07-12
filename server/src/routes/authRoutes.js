const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { noCredentials, invalidCredentials } = require('../constants/messages');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw invalidCredentials;

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(422).send({ error: noCredentials });

  const user = await User.findOne({ email });
  if (!user) return res.status(422).send({ error: invalidCredentials });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: invalidCredentials });
  }
});

module.exports = router;
