const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

// Get user (protected)
router.get('/:id', verifyToken, userController.getUser);

// Update user (protected)
router.put('/:id', verifyToken, userController.updateUser);

module.exports = router;
