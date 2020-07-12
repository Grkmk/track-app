const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { mustLogin } = require('../constants/messages');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send({ error: mustLogin });

  const token = authorization.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(401).send({ error: mustLogin });

    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;

    next();
  });
};
