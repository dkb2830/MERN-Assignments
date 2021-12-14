const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String },
    breed: { type: String },
    age: {type: String},
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);

