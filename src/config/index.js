// src/config/index.js
require('dotenv').config();
const connectDB = require('./db');

connectDB(); // Just connect the database here
