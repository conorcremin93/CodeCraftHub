const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.findUserById = async (userId) => {
  return await User.findById(userId);
};

exports.getUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};

exports.updateUser = async (userId, updates) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  // Secure password update
  if (updates.password) {
    const salt = await bcrypt.genSalt(10);
    updates.password = await bcrypt.hash(updates.password, salt);
  }

  Object.assign(user, updates);
  await user.save();
  return user;
};

exports.deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) throw new Error('User not found');
  return user;
};
