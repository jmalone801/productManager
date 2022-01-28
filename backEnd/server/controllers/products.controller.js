const { Product } = require('../models/products.model');


// creates one new product
module.exports.createProducts = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
};

// Returns all products
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allTheProducts => res.json( allTheProducts ))
        .catch(err => res.json(err));
};

// Returns one product
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params._id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
};

// Updates one product
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json( updatedProduct ))
        .catch(err => res.json(err));
};

// Deletes one product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(confirmDelete => res.json(confirmDelete))
        .catch(err => res.json(err))
}