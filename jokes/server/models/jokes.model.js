const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: Text
    },
    punchline: {
        type: Text
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updatedAt: {
        type: Date, default: Date.now
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
