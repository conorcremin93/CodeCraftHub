const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  if (existingUser) throw new Error('User already exists');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  return user;
};

exports.validateUser = async ({ email, password }) => {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return user;
};
