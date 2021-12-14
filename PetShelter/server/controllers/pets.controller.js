const Pet = require('../models/pet.model');   
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome to the Pet Shelter"
    });
}
module.exports.createPet = (request, response) => {
    const { name, breed, age } = request.body;
    Pet.create({
        name,
        breed,
        description,
        skills
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({ _id: request.params.id })
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.json(err))
}







