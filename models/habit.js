const mongoose= require('mongoose');

const schema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is required"]},
    completedDates: {type: [Date], default: []},
    createdAt: {type: Date, default: Date.now},
    type: {type: Strinng, enum: ["health","finance","hobbies","other"],default: 'other'}
});

module.exports = mongoose.model('Habit', schema);