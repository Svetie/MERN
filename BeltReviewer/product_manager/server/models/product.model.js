const mongoose = require('mongoose');

// title, price, description

const ProductsSchema = new mongoose.Schema({
    // fields
    title: { 
        type: String,
        requred: [true, "Title  is required"],
        minlength: [2, "Title min 5 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
});

// register the above as a table
const Product = mongoose.model("Product", ProductsSchema);

// export
module.exports = Product;

