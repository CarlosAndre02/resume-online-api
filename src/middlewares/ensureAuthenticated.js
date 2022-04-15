const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, username } = data;

    const user = await User.findOne({
      where: {
        id,
        username,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userUsername = username;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
