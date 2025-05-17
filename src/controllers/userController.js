const bcrypt = require('bcrypt');
const User = require('../models/User');

// Get user by ID (authenticated)
exports.getUser = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    return res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// Update user info
exports.updateUser = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const { username, email, password } = req.body;

    if (username) user.username = username;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    return res.json({ msg: 'User profile updated successfully' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
