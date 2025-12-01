const mongoose = require('mongoose');
const habit = require('./habit');
const schema = new mongoose.Schema({
    profilePhoto: {type: String, default: ''},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    habits: {type: [habit.schema], default: []},
    passwordHash: {type: String, required: true},
});
module.exports = mongoose.model('User',schema)