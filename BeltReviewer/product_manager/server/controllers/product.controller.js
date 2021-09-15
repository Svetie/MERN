const Product = require("../models/product.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "hello Products-api mongoose"})
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({results: allProducts})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createNewProduct = (req, res) => {

    Product.create(req.body)
        .then(newProductObj => {
            res.json({ results: newProductObj});
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneProduct = (req, res) => {
    console.log('trying to find one Product');
    console.log(req.params.id);
    let idToFind = req.params.id;
    // console.log(id);
    Product.findOne({_id: idToFind})
        .then(foundProduct => {
            res.json({results: foundProduct})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.updateExistingProduct = (req, res) => {
    console.log('ID to put is  ', req.params.id);
    Product.findOneAndUpdate(
        
        { _id: req.params.id },
        req.body,
        // new: true -> return the newly updated info
        // run validators -> apply the same validations 
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ results: updatedProduct }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => res.json({ results: deletedProduct }))
        .catch(err => {
            res.json({err: err})
        });
}

module.exports.findRandomProduct = (req, res) => {
    Product.find()
    .then(allProducts=> {
        console.log(allProducts);
        let lengthOfProducts = allProducts.length;
        console.log('lengthOfProducts is ', lengthOfProducts)

        function getRandomInt(max) {
            return Math.floor(Math.random() + max);
        }
        let randomIndex = getRandomInt(lengthOfProducts-1);
        console.log('randomIndex is ', randomIndex)
        res.json({ results: allProducts[1]});
    })
    .catch(err => {
        res.json({err: err})
    });
}