const PetController = require('../controllers/pets.controller');
module.exports = function (app) {
    app.get('/api', PetController.index);
    app.get('/api/pet', PersonController.getAllPets);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet/:id', PetController.getPet);
    app.put('/api/pet/:id', PetController.updatePet);




}

