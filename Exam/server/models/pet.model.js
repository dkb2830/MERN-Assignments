const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be atleast 3 characters"]
},
    breed: { type: String,
    required: [true, "Breed is required"],
    minlength: [3, "Type must be atleast 3 characters long"]
},
    description: {type: String,
    required: [true, "Description is required"],
    minlength: [3, "Description must be at least 3 characters"]
},
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type: String}
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);

