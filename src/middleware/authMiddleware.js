const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const bearerToken = req.header('Authorization')?.split(' ')[1];
  const token = bearerToken || req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // { id: ... }
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
