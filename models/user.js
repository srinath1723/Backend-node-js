const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: String,
});

module.exports = mongoose.model('user', userSchema, 'users');