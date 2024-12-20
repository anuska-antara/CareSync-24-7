const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }, // Automatically add a timestamp
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
