require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');
const bcrypt = require('bcrypt');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});

  const password = await bcrypt.hash('password123', 10);

  await User.create([
    { username: 'alice', email: 'alice@example.com', password },
    { username: 'bob', email: 'bob@example.com', password },
  ]);

  console.log('✅ Database seeded');
  process.exit();
};

seed();
