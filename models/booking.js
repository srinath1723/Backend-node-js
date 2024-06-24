const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    customer:String,
    date:Date,
    startTime:Number,
    endTime:Number,


});

module.exports = mongoose.model('booking', userSchema, 'bookings');