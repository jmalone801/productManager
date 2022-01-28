const ProductsController = require('../controllers/products.controller');

module.exports = function (app) {
    // creates one new product
    app.post('/api/new/product', ProductsController.createProducts);

    // Returns all products
    app.get("/api/products", ProductsController.findAllProducts);

    // Returns one product
    app.get('/api/product/:_id', ProductsController.getOneProduct);

    // Updates one product
    app.put("/api/product/update/:_id", ProductsController.updateExistingProduct);

    // Deletes one product
    app.delete("/api/product/delete/:_id", ProductsController.deleteProduct);
}
