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
        age
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

