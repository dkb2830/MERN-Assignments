const AuthorController = require('../controllers/author.controller');
module.exports = function (app) {
    app.post('/api/author/new', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);

}




