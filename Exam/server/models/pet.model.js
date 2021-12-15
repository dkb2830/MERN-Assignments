const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String,
    // required: [true, "Name is required"] 
},
    breed: { type: String,
    // required: [true, "Breed is required"] 
},
    description: {type: String,
    // required: [true, "Description is required"]
},
    skills: {type: String},
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);

