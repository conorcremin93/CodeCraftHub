const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

// Register
router.post('/register', [
  check('username', 'Username is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], authController.register);

// Login
router.post('/login', [
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password is required').notEmpty()
], authController.login);

// Refresh Token (protected)
router.post('/refresh', verifyToken, authController.refreshToken);

module.exports = router;
