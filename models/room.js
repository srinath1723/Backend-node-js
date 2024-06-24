const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: String,
    seats: Number,
    amentities: [String],
    price:Number
});

module.exports = mongoose.model('room', userSchema, 'rooms');