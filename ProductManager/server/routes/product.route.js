const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct); 
    app.get('/api/product/:_id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:_id', ProductController.deleteProduct);



    /* This is new */
}






