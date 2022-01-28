const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title must be at least 3 characters"],
            minlength: [3]
        },
        price: {
            type: Number,
            required: [true, "Please enter price"],
            min: [0]
        },
        description: {
            type: String,
            required: [true, "Description must be at least 3 characters"],
            minlength: [3]
        }
    },
    { timestamps: true }
)

module.exports.Product = mongoose.model('Products', ProductManagerSchema);